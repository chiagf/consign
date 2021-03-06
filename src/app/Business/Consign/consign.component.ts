import {Component, ElementRef, OnInit, ViewChild, ViewChildren} from '@angular/core';
import {TextInputComponent} from '../../DataEntry/textInput/text-input.component';
import {SelectComponent} from '../../DataEntry/select/select.component';

import { HostListener } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router'

import { Consign, IConsign } from '../models/Consign';
import { ConsignService } from './consign.service'
import { CurrentTxnInfo } from '../models/txnInfo';
import { AuthenticationService } from '../../Auth/_services';


@Component({
  selector: 'app-consign',
  templateUrl: './consign.component.html',
  styleUrls: ['./consign.component.css']
})
export class ConsignComponent implements OnInit {

  @ViewChild('txtBarCode') txtBarCode: TextInputComponent;
  @ViewChild(TextInputComponent) allInputs;
  private sub: Subscription;
  consignType: number;
  barCodeScanned = '';
  bc:  string[] = [];
  barcodeArray: string[] = [];
  Station1: string;
  Station1Id: number;;
  Station2: string;
  Station2Id: number;
  myOptionList = [{Id: 1, Name: 'Miri'}, {Id: 2, Name: 'Sibu'}, {Id: 3, Name: 'Kuching'}];
  canFocus = true;
  loading: boolean = false;
  mainLabel: string;
  station1Label : string;
  station2Label : string;

  // https://stackoverflow.com/questions/35922071/warn-user-of-unsaved-changes-before-leaving-page
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    // insert logic to check if there are pending changes here;
    // returning true will navigate without confirmation
    // returning false will show a confirm dialog before navigating away
    return false;
  }

  constructor(private consignService: ConsignService,private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService) {   
   }

  ngOnInit() {
    setInterval(() => {
      if (this.canFocus) this.txtBarCode.myElement.nativeElement.children[1].focus();
      this.txtBarCode.currentValue = '';
    }, 1000);

    this.sub = this.route.params.subscribe(
      params => {
          this.consignType = +params['id'];
          if (this.consignType === 1){
            this.mainLabel = 'Received';
            this.station1Label='From:';
            this.station2Label='By:'
          } else if (this.consignType === 2) {
            this.mainLabel = 'Deliver';
            this.station1Label='From:';
            this.station2Label='To:'
          }
          this.barcodeArray = [];
          this.bc = [];
      }
    )    
    
    
  }

  gp() {
    const array = [{
      Id: '001',
      qty: 1
    }, {
      Id: '002',
      qty: 2
    }, {
      Id: '001',
      qty: 2
    }, {
      Id: '003',
      qty: 4
    }];

    const result = [];
    array.reduce(function (res, value) {
      if (!res[value.Id]) {
        res[value.Id] = {
          qty: 0,
          Id: value.Id
        };
        result.push(res[value.Id]);
      }
      res[value.Id].qty += value.qty;
      return res;
    }, {});

    // console.log(result);
  }

  appendBarCode() {
    const a = this.barCodeScanned;
    if (a === '') { return; }
    // let item = {barcode: a}
    this.barcodeArray.push(a);
    // this.bc = Object.assign({},this.barcodeArray);
    // https://stackoverflow.com/questions/7486085/copying-array-by-value-in-javascript
    this.bc = this.barcodeArray.slice();
    this.bc.reverse();
    beep();
    // this.barCodeScanned = "";
    setTimeout(() => {
      this.barCodeScanned = '';
    }, 10);

    //this.gp();
    // alert(a);

    // this.allInputs.myElement.nativeElement.children[1].focus();
    // this.txtBarCode.myElement.nativeElement.children[1].focus();

    // https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
    function beep() {
      const snd = new Audio('data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=');
      snd.play();
    }


  }

  JS2ISODate(d: Date) {
    // d in Fri Jun 09 2017 00:00:00 GMT+0800 (Malay Peninsula Standard Time) format
    if (!d) return;
    let ISODate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() ;
    let hour = d.getHours();
    let ISOHour = hour + ':';    
    if ( hour < 10 ) {
      ISOHour = '0' + hour + ':';
    } 
    let min = d.getMinutes();
    let ISOMinute = min + ':';    
    if ( min < 10 ) {
      ISOMinute = '0' + min + ':';
    } 
    let seconds = d.getSeconds();
    let ISOseconds = seconds.toString() ;    
    if ( seconds < 10 ) {
      ISOseconds = '0' + seconds;
    } 
    let ISOTime =  ISOHour + ISOMinute + ISOseconds;
    
    ISODate += 'T' + ISOTime; // 'T00:00:00';
    return ISODate;
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

  createModel(): IConsign {
    let m: IConsign ={
      ConsignId: -1,
      Id: -1,
      EntryDate: null,
      UserName: this.authenticationService.currentUserName(),
      TxnDate: this.JS2ISODate(new Date()),  
      ConsignType: this.consignType, 
      Station1Id: this.Station1Id, 
      Station1: this.getValue('Id', this.Station1Id, this.myOptionList),
      Station2Id: this.Station2Id , 
      Station2: this.getValue('Id', this.Station2Id, this.myOptionList)
    }
    return m;
  }

  httpPost(bcs: string[]) {
    const h = new CurrentTxnInfo() ;
    h.TxnType = 'CONSIGN';
    h.IntendedOperation = 1;
    h.BookRefName = 'Consign';
    // let t1 = new Consign() ;
    // // let utc = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    // let utc = new Date()
    // // t1.TxnDate = Date.now();
    // t1.TxnDate =this.JS2ISODate(utc);

    let bcModels = [];
    bcs.forEach((item) => {
      let bcModel = {'barcode' : item}
      bcModels.push(bcModel ); // backend case for barcode or Barcode???

    })
    const body = this.consignService.wrapBody(h, this.createModel(), bcModels, {}, {})
    return this.consignService.postDocuments(body)
  }

  post() {
    this,this.loading = true;
    // https://stackoverflow.com/questions/41320125/how-to-implement-http-post-timeout-with-last-rxjs-version
    this.httpPost(this.barcodeArray).timeout(1600000).subscribe(
      res => {
        alert(res)
        this.barcodeArray = [];
        this.bc = [];
        alert("Posted");
        this,this.loading = false;
      },
      error => {
        alert(error.message)
        this,this.loading = false;
      }
    );
    
  }

  myFocus(e) {
    this.canFocus=false;
  }

  myBlur(e) {
    this.canFocus=true;
  }

  myAfterUpdate(e) {
    this.canFocus=true;
  }

}
