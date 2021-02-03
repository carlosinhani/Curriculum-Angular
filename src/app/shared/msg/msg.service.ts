import { BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


export enum AlertCorMsg {
  WARNING = 'warning',
  SUCCESS = 'success'
}

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(
    private modalService: BsModalService
  ) { }

  private alertMsg(msg: string, corMsg: AlertCorMsg, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.corMsg = corMsg;
    bsModalRef.content.msg = msg;

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }



  alertMsgWarning(message: string) {
    this.alertMsg(message, AlertCorMsg.WARNING);
  }

  alertMsgSuccess(message: string) {
    this.alertMsg(message, AlertCorMsg.SUCCESS, 3000);
  }
}
