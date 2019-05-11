import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { ServiceRequestsModel } from '../../shared/models/service-requests.model';
import { CurrentUserService } from '../../shared/services/current-user.service';
import { ServiceRequestsService } from '../../shared/services/service-requests.service';

@Component({
  selector: 'app-service-request-list',
  templateUrl: './service-request-list.component.html',
  styleUrls: ['./service-request-list.component.scss']
})
export class ServiceRequestListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phoneNumber', 'channel', 'status', 'actions'];
  dataSource: MatTableDataSource<ServiceRequestsModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ServiceRequestsList: ServiceRequestsModel[] = [];
  confirmType: string;
  confirmTitle: string;
  confirmMessage: string;
  confirmAction: string;
  confirmElementData: any;
  messageText: string;
  showSuccessMessage: boolean;
  showErrorMessage: boolean;

  @ViewChild('messageBox') messageBox: ElementRef;

  constructor(private titleService: Title, private requestService: ServiceRequestsService, private currentUserService: CurrentUserService) {

  }

  ngOnInit() {
    this.titleService.setTitle('Kauri | Dashboard');
    this.getUserServiceRequests();
  }

  getUserServiceRequests() {
    this.closeMessageBox();

    this.requestService.getServiceRequests(this.currentUserService.getUserId()).subscribe(
      data => {
        this.ServiceRequestsList = data;
        this.dataSource = new MatTableDataSource(this.ServiceRequestsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        this.showErrorMessage = true;
        this.messageText = error.error.message || error.message;
      },
      () => {
      }
    );
  }

  confirmDelete(requestId) {
    this.confirmType = 'delete';
    this.confirmTitle = 'Confirm Delete';
    this.confirmMessage = 'Are you sure you want to delete this request?';
    this.confirmAction = 'Yes, Delete It';
    this.confirmElementData = requestId;
  }

  confirmResponse(data) {
    if (data.type === 'delete') {
      this.deleteRequest(data.elementData);
    }
  }

  deleteRequest(requestId: string) {
    this.closeMessageBox();

    this.requestService.deleteRequest(requestId).subscribe(
      data => {
        this.messageText = data.message;
        this.showSuccessMessage = true;
      },
      error => {
        this.messageText = error.error.message || error.message;
        this.showErrorMessage = true;
      },
      () => {
        this.ServiceRequestsList.splice(this.ServiceRequestsList.indexOf(this.ServiceRequestsList.find(x => x.publicId === requestId)), 1);
        this.dataSource = new MatTableDataSource(this.ServiceRequestsList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  closeMessageBox() {
    this.showErrorMessage = false;
    this.showSuccessMessage = false;
  }
}
