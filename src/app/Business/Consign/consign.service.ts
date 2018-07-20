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

@Injectable()
export class ConsignService {

  constructor(private http: HttpClient) { }

  saveConsignments(consigns: string[]): Observable<CurrentTxnInfo> {
    // https://stackoverflow.com/questions/50606752/angular-using-the-equivalent-of-requestoptions-of-http-with-httpclient
    let url = 'https://fe9a4581.ngrok.io/data/PostDocument'
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams().append('key', 'value')
    }
    const h = new CurrentTxnInfo() ;
    h.TxnType = 'AA';
    const body = {
      Header: JSON.stringify(h),
      Data1: JSON.stringify(consigns),
      Data2: JSON.stringify({}),
      Data3: JSON.stringify({}),
      Data4: JSON.stringify({})
    };
    return this.http.post<CurrentTxnInfo>(url, body, options)
   
  }

}
