import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SendModel } from '../core/models/send.model';

@Injectable({
  providedIn: 'root'
})
export class UserIssueLibService {
  private url;

  constructor(private _HttpClient: HttpClient) { }

  send(model: SendModel) {
    const formData = new FormData();
    formData.append('AppId', model.AppId);
    formData.append('Description', model.Description);
    formData.append('Image', model.Image);
    formData.append('IssueType', model.IssueType);
    formData.append('Priority', model.Priority);
    formData.append('UserName', model.UserName);
    return this._HttpClient.post('', formData)
  }
}
