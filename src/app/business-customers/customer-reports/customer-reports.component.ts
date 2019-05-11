import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { UserBusiness } from '../../shared/models/account.model';
import { CustomerReportsModel } from '../../shared/models/business-customers';
import { DashBoardOverView } from '../../shared/models/dashboard';
import { BusinessCustomersService } from '../../shared/services/business-customers.service';
import { CurrentUserService } from '../../shared/services/current-user.service';


@Component({
  selector: 'app-customer-reports',
  templateUrl: './customer-reports.component.html',
  styleUrls: ['./customer-reports.component.scss']
})
export class CustomerReportsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'phoneNumber', 'channel', 'status', 'actions'];
  dataSource: MatTableDataSource<CustomerReportsModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  customersList: CustomerReportsModel[] = [];
  currentReport: CustomerReportsModel;
  currentBusiness: UserBusiness;
  confirmType: string;
  confirmTitle: string;
  confirmMessage: string;
  confirmAction: string;
  confirmElementData: any;
  messageText: string;
  showSuccessMessage: boolean;
  showErrorMessage: boolean;
  @ViewChild('closeReportModal') closeReportModal: ElementRef;
  @ViewChild('messageBox') messageBox: ElementRef;
  reportData = new DashBoardOverView();

  constructor(private titleService: Title, private reportService: BusinessCustomersService,
              private currentUserService: CurrentUserService) {

  }


  ngOnInit() {
    this.titleService.setTitle('HandyMan | Customers');
    this.currentBusiness = this.currentUserService.getCurrentBusiness();
    this.getCustomerAnalysis();
  }


  getCustomerAnalysis() {
    this.closeMessageBox();

    this.reportService.getCustomerReports(this.currentBusiness.publicId).subscribe(
      data => {
        this.customersList = data;
        if (this.customersList) {
          this.currentReport = data[0];
        }
        this.dataSource = new MatTableDataSource(this.customersList);
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

  confirmDelete(reportId) {
    this.confirmType = 'delete';
    this.confirmTitle = 'Confirm Delete';
    this.confirmMessage = 'Are you sure you want to delete this report?';
    this.confirmAction = 'Yes, Delete It';
    this.confirmElementData = reportId;
  }

  confirmResponse(data) {
    if (data.type === 'delete') {
      this.deleteReport(data.elementData);
    }
  }

  deleteReport(reportId: string) {
    this.closeMessageBox();

    this.reportService.deleteReport(reportId).subscribe(
      data => {
        this.messageText = data.message;
        this.showSuccessMessage = true;
      },
      error => {
        this.messageText = error.error.message || error.message;
        this.showErrorMessage = true;
      },
      () => {
        this.customersList.splice(this.customersList.indexOf(this.customersList.find(x => x.publicId === reportId)), 1);
        this.dataSource = new MatTableDataSource(this.customersList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  selectReport(reportId: string) {
    this.currentReport = this.customersList.find(x => x.publicId === reportId);
  }

  closeReport() {
    this.currentReport = null;
    this.closeReportModal.nativeElement.click();
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
