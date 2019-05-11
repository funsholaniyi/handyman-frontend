import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private requestService: ServiceRequestsService, private currentUserService: CurrentUserService) {
    this.newRequestForm = this.fb.group({
      firstName: ['Mariam', [Validators.required]],
      lastName: ['Addo', [Validators.required]],
      phoneNumber: ['233501693345', [Validators.required]],
      testChannel: ['IVR', [Validators.required]]
    });
  }

  get firstName() {
    return this.newRequestForm.get('firstName');
  }

  get lastName() {
    return this.newRequestForm.get('lastName');
  }

  get phoneNumber() {
    return this.newRequestForm.get('phoneNumber');
  }

  get testChannel() {
    return this.newRequestForm.get('testChannel');
  }

  ngOnInit() {
  }

  closeMessageBox() {
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
  }

  submit() {
    this.closeMessageBox();

    const request = this.newRequestForm.value;

    this.requestService.createServiceRequest(request).subscribe(
      data => {
        this.messageText = data.message;
        this.showSuccessMessage = true;
        const _data: ServiceRequestsModel = data.body;
      },
      error => {
        this.btnSpinner = false;
        this.messageText = error.error.message || error.message;
        this.newRequestForm.setErrors({APIError: true});
        this.showErrorMessage = true;
      },
      () => {
        this.messageBox.nativeElement.focus();
      }
    );
  }

}
