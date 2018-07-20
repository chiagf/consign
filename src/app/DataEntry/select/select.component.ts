// https://stackoverflow.com/questions/40149537/angular-2-dynamic-create-select-and-set-selected-option-edit-operation
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() optionList:any[];
  cancelFlag: boolean;
  cSource: any ;///////////////////////= '';

  dontRepeat: boolean;
  count: number;
  currentValue: boolean;
  gblDoingBeforeUpdate:boolean
  gblDoingAfterUpdate:boolean

  @Output() BeforeUpdate: EventEmitter<any> = new EventEmitter();
  @Output() AfterUpdate: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() ctrlSourceChange = new EventEmitter();

  @Input() isLocked = false;

  @Input()
  get ctrlSource() {
    return this.cSource
  };

  set ctrlSource(val) {
    this.cSource = val;
    this.ctrlSourceChange.emit(this.cSource);
  }
  constructor() {
    this.cancelFlag = false;
    this.dontRepeat = false;
    this.count = 0;
    this.gblDoingAfterUpdate=false;
    this.gblDoingBeforeUpdate=false;
  }

  ngOnInit() {
  }

  f($event) {
    //setTimeout(() => $event.target.focus(), 10);

    setTimeout(() => this.count = 0, 20);
  }

  myChange(e) {
    if(this.gblDoingBeforeUpdate)return;
    if(this.gblDoingAfterUpdate)return;

    let newValue = e.target.value;

    //e.preventDefault();
    //e.stopPropagation();
    // e.preventDefault ? e.preventDefault() : (e.returnValue = false);


    //let cancel=false;
    if (newValue !== this.currentValue) {
      console.log(newValue);
      let v: any = null;
      let p = {e: e, v: v};
      this.BeforeUpdate.emit(p);


      //e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      if (p.v) {
        this.cancelFlag = true;

        //this.f(e);

        e.target.value=this.currentValue;
        this.ctrlSource = e.target.value;
        this.count = 0;



      } else {
        this.cancelFlag = false;
        this.ctrlSource = e.target.value;
        this.count = 0;
        this.AfterUpdate.emit(p);
      }

    }
    else {
      this.cancelFlag = false;
      this.count = 0;

      //console.log("After afterUpdate")
    }

  }

  myFocus(e) {
    //console.log("Focus Event: " +e.target.value);
    if (!this.cancelFlag) {
      console.log("Focus Event: " + e.target.value);
      this.currentValue = e.target.value;
      this.dontRepeat = false;
      this.onFocus.emit(e);
    } else {
      this.dontRepeat = true;

    }


  }

  myBlur(e) {
    this.onBlur.emit(e);
  }

  myParseInt(s:any){
    return parseInt(s);
  }

}
