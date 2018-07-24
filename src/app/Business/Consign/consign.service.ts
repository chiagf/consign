import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IConsign } from '../models/consign';
import {CurrentTxnInfo} from '../models/txnInfo'
import { ConstantService } from '../../constant.service'

@Injectable()
export class ConsignService {

  constructor(private http: HttpClient, private constantService: ConstantService) { }

  wrapBody(currentTxnInfo: CurrentTxnInfo, obj1, obj2, obj3, obj4) {
    
    const body = {
      Header: JSON.stringify(currentTxnInfo),
      Data1: JSON.stringify(obj1),
      Data2: JSON.stringify(obj2),
      Data3: JSON.stringify(obj3),
      Data4: JSON.stringify(obj4)
    };
    return body;
  }

  postDocuments(body): Observable<CurrentTxnInfo> {
    // https://stackoverflow.com/questions/50606752/angular-using-the-equivalent-of-requestoptions-of-http-with-httpclient
    let url = this.constantService.API_POSTDOC; // 'https://fe9a4581.ngrok.io/data/PostDocument'
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams().append('key', 'value'),
      withCredentials: true
    }    
    return this.http.post<CurrentTxnInfo>(url, body, options)
   
  }

}
