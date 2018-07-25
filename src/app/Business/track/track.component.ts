import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {TextInputComponent} from '../../DataEntry/textInput/text-input.component';
import {SelectComponent} from '../../DataEntry/select/select.component';

import { HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router'

import { Consign, IConsign } from '../models/Consign';
import { ConsignService } from '../consign/consign.service'
import { CurrentTxnInfo } from '../models/txnInfo';
import { AuthenticationService } from '../../Auth/_services';




@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  loading: boolean = false;

  userInput: string;
  userInputArray: string[];

  constructor(private consignService: ConsignService,private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService) {   
   }

  ngOnInit() {
  }

  getValue(keyName, key, arr) {
    for (var i = arr.length-1; i >= 0; i--) {
        var obj = arr[i];
        let a=obj[keyName];
        let b=obj['name'];
        let c = parseInt(key);
        if (obj[keyName] === parseInt(key)) {
          return obj['Name'];
        }
    }
}

  // createModel(): IConsign {
  //   let m: IConsign ={
  //     ConsignId: -1,
  //     Id: -1,
  //     EntryDate: null,
  //     UserName: this.authenticationService.currentUserName(),
  //     TxnDate: this.JS2ISODate(new Date()),  
  //     ConsignType: this.consignType, 
  //     Station1Id: this.Station1Id, 
  //     Station1: this.getValue('Id', this.Station1Id, this.myOptionList),
  //     Station2Id: this.Station2Id , 
  //     Station2: this.getValue('Id', this.Station2Id, this.myOptionList)
  //   }
  //   return m;
  // }

  httpPost() {
    // const h = new CurrentTxnInfo() ;
    // this.userInput.replace('\r', ' ').replace('\n', ' ');
    this.userInputArray = this.userInput.split('\n');
    // this.userInputArray = this.userInput.split('\r');
    // this.userInputArray = this.userInput.split(' ');
    this.userInputArray = this.userInputArray.filter( (v) => {
        return v !== ''
    })

    // let bcModels = [];
    // bcs.forEach((item) => {
    //   let bcModel = {'barcode' : item}
    //   bcModels.push(bcModel ); // backend case for barcode or Barcode???

    // })
    // const body = this.consignService.wrapBody(h, this.createModel(), bcModels, {}, {})
    // return this.consignService.postDocuments(body)
  }

  post() {
    this.httpPost();

    let printWindow = window.open('http://localhost:4200/assets/static/printlist.html', '_blank');
    // this,this.loading = true;
    // https://stackoverflow.com/questions/41320125/how-to-implement-http-post-timeout-with-last-rxjs-version
    // this.httpPost(this.barcodeArray).timeout(1600000).subscribe(
    //   res => {
    //     alert(res)
    //     this.barcodeArray = [];
    //     this.bc = [];
    //     alert("Posted");
    //     this,this.loading = false;
    //   },
    //   error => {
    //     alert(error.message)
    //     this,this.loading = false;
    //   }
    // );
    
  }

  

}
