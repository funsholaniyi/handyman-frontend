import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-action',
  templateUrl: './confirm-action.component.html',
  styleUrls: ['./confirm-action.component.scss']
})
export class ConfirmActionComponent implements OnInit {

  @Input() confirmType: string;
  @Input() confirmTitle: string;
  @Input() confirmMessage: string;
  @Input() confirmAction: string;
  @Input() confirmElementData: any;
  @Output() confirmResponse = new EventEmitter<any>();
  @ViewChild('closeConfirmModal') closeConfirmModal: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  sendDecision() {
    this.closeConfirmModal.nativeElement.click();
    this.confirmResponse.emit({
      type: this.confirmType,
      elementData: this.confirmElementData
    });
  }
}
