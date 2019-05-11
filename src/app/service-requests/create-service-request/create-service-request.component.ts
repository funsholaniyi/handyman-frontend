import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HandymanModel } from '../../shared/models/account.model';
import { ServiceRequestsModel } from '../../shared/models/service-requests.model';
import { CurrentUserService } from '../../shared/services/current-user.service';
import { ServiceRequestsService } from '../../shared/services/service-requests.service';

@Component({
  selector: 'app-create-service-request',
  templateUrl: './create-service-request.component.html',
  styleUrls: ['./create-service-request.component.scss']
})
export class CreateServiceRequestComponent implements OnInit {

  newRequestForm: FormGroup;
  messageText: string;
  showSuccessMessage: boolean;
  showErrorMessage: boolean;
  btnSpinner: boolean;
  @ViewChild('messageBox') messageBox: ElementRef;
  handymanId: string;
  theHandyman: HandymanModel | any = {};
  currentReference = '';

  constructor(private fb: FormBuilder,
              private currentUserService: CurrentUserService, private activatedRoute: ActivatedRoute,
              private requestService: ServiceRequestsService) {
    this.newRequestForm = this.fb.group({
      serviceType: [{value: '', disabled: true}, [Validators.required]],
      description: ['', [Validators.required]]
    });
    this.handymanId = this.activatedRoute.snapshot.queryParamMap.get('handyman');
    this.currentReference = this.getReference(10);
  }

  get description() {
    return this.newRequestForm.get('description');
  }


  ngOnInit() {
    this.getHandymanDetails();
  }


  getHandymanDetails() {
    this.requestService.getHandymanDetails(this.handymanId).subscribe(
      data => {
        this.theHandyman = data;
        this.newRequestForm.patchValue({
          serviceType: this.theHandyman.occupation.toUpperCase()
        });
      },
      error => {
      },
      () => {
      }
    );
  }

  closeMessageBox() {
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
  }

  submit() {
    // update reference
    this.currentReference = this.getReference(10);

    this.closeMessageBox();
    const request = this.newRequestForm.value;
    request['amount'] = 2000;
    request['userId'] = this.currentUserService.getUserId();
    request['handyId'] = this.theHandyman._id;

    console.log('the request is', request);
    this.requestService.createServiceRequest(request).subscribe(
      data => {
        this.messageText = 'Order was successful';
        this.showSuccessMessage = true;
        const _data: ServiceRequestsModel = data.body;
      },
      error => {
        this.btnSpinner = false;
        this.messageText = 'An error occurred';
        this.newRequestForm.setErrors({APIError: true});
        this.showErrorMessage = true;
      },
      () => {
        this.messageBox.nativeElement.focus();
      }
    );
  }

  getReference(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  paymentCancel() {
    this.messageText = 'Payment was cancelled';
    this.showErrorMessage = true;
    this.messageBox.nativeElement.focus();
  }

  paymentDone(data) {
    this.messageText = 'Payment successful';
    this.showSuccessMessage = true;    // when done
    this.messageBox.nativeElement.focus();
    this.submit();
  }

}
