import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SendModel } from '../core/models/send.model';

@Injectable({
  providedIn: 'root'
})
export class UserIssueLibService {
  private url;

  constructor(private _HttpClient: HttpClient ){ }

  send(model: SendModel) {
    return this._HttpClient.post('', model)
  }
}
