import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {  Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@ng-stack/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxCaptureService } from 'ngx-capture';
import { NgxSmartModalComponent } from 'ngx-smart-modal';
import { EnumDto } from '../core/dtos/enum.dto';
import { getIssueTypeArr } from '../core/enums/issue-type.enum';
import { PriorityEnum, getPriorityArr } from '../core/enums/priority.enum';
import { UserErrorFormInterface } from '../core/form-interfaces/user-error.form-interface';
import { LibConfigModel, LibConfigService } from '../core/models/lib-config.model';
import { UserIssueLibService } from './user-issue-lib.service';

@Component({
  selector: 'lib-user-issue-lib',
  templateUrl: './user-issue-lib.component.html',
  styleUrls: ['./user-issue-lib.component.scss']
})
export class UserIssueLibComponent implements OnInit {

  imgData = null;
  priorityArr: EnumDto[] = [];
  issueTypeArr: EnumDto[] = [];
  rForm: FormGroup<UserErrorFormInterface>;
  modalIsVisible:boolean = false;

  get priorityEnum() {
    return PriorityEnum;
  }

  get currentUrl() {
    return window.location.href
  }

  get appName() {
    return this._LibConfigService.appName;
  }

  get fCtrls() {
    return this.rForm.controls;
  }


  @ViewChild('addUserErrorPopup', { static: false }) modal: NgxSmartModalComponent;

  constructor(private _NgxCaptureService: NgxCaptureService,
    private _UserIssueLibService: UserIssueLibService, private _ToastrManager:ToastrManager,
   private _FormBuilder: FormBuilder , @Inject(LibConfigService) private _LibConfigService : LibConfigModel) { }

  ngOnInit(): void {
    this.priorityArr = getPriorityArr();
    this.issueTypeArr = getIssueTypeArr();

    this.rForm = this._FormBuilder.group<UserErrorFormInterface>({
      issueType: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    this.modal.onClose.asObservable().subscribe(()=>{
      this.imgData = null;
      this.modalIsVisible = false;
    });

    this.modal.onOpen.asObservable().subscribe(()=>{
      this.modalIsVisible = true;
    });
  }

  showAddUserErrorPopup() {
    if(  this.modal.isVisible() == true){
      this.modal.close();
      return false;
    }
    this._NgxCaptureService.getImage(document.body, true).then(img => {
      this.imgData = img;
    }).finally(() => {
        this.modal.open();
    });
  }

  send() {
    const formValue = this.rForm.value;
    this._UserIssueLibService.send({
      AppId: '',
      IssueType: formValue.issueType,
      Priority: formValue.priority,
      Description: formValue.description,
      Image: this.dataURItoBlob(this.imgData),
      UserName: ''
    }).subscribe(() => {
      this._ToastrManager.successToastr('Issue has been sended successfully');
    }, err => {
      this._ToastrManager.errorToastr(err.error.message);
    });
  }

  private dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
}

}
