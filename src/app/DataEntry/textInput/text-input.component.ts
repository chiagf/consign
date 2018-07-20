import {Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit, AfterViewChecked } from '@angular/core';

// import {MyCurrencyFormatterDirective} from '../my-currency-formatter.directive'
// import {MyCurrencyPipe} from '../my-currency.pipe'
// import {FormatterService} from "../services/formatter.service"

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements  AfterViewChecked, OnInit {
  cancelFlag: boolean;
  cSource: any = '';

  dontRepeat: boolean;
  count: number;
  currentValue: string;
  gblDoingBeforeUpdate: boolean;
  gblDoingAfterUpdate: boolean;

  @Input() isLocked = false;

  @Input() formatterFn: number; // 1 means useing FormatterService.formatCurrency()
                                //2 ....

  @Output() BeforeUpdate: EventEmitter<any> = new EventEmitter();
  @Output() AfterUpdate: EventEmitter<any> = new EventEmitter();

  @Output() ctrlSourceChange = new EventEmitter();

  @Input()
  get ctrlSource() {
    //this.currentValue=this.myElement.nativeElement.children[1].value;
    //this.myElement.nativeElement.children[1].value=this.formatterService.main(this.formatterFn,this.currentValue,0);
    return this.cSource

  };

  set ctrlSource(val) {
    this.cSource = val;
    this.ctrlSourceChange.emit(this.cSource);

    if (this.formatterFn !== 0){
      setTimeout(() => this.doFormat(), 2 );
    }



  }


  el: ElementRef;


  constructor(public myElement: ElementRef) {


    this.cancelFlag = false;
    this.dontRepeat = false;
    this.count = 0;
    this.gblDoingAfterUpdate = false;
    this.gblDoingBeforeUpdate = false;

    //this.myElement.nativeElement.children[1].value=this.formatterService.main(this.formatterFn,this.myElement.nativeElement.children[1].value,0)


  }



  ngOnInit() {
    if(!this.formatterFn){this.formatterFn=0};
    //setTimeout(()=>this.doFormat(),200)


  }

  ngAfterViewChecked(){
    //this.currentValue=this.myElement.nativeElement.children[1].value;
    //this.doFormat();
    // console.log("ngAfterViewChecked")


    //this.currentValue=this.myElement.nativeElement.children[1].value;

  }


  t() {
    this.count = 0;
  }


  f($event) {
    setTimeout(() => $event.target.focus(), 10);
    // alert("WAIT");
    //this.count=0;
    setTimeout(() => this.count = 0, 20);
  }

  myBlur(e) {
    //if (this.dontRepeat) return;
    if (this.gblDoingBeforeUpdate) return;
    if (this.gblDoingAfterUpdate) return;
    // if (this.count !== 0) {
    //   this.count = 0;
    //   //this.f(e);
    //
    //   return
    // } else {
    //   this.count++;

    //}


    let newValue = e.target.value;
    //wrong newValue=this.formatterService.main(this.formatterFn,newValue,0)



    //e.preventDefault();
    //e.stopPropagation();
    // e.preventDefault ? e.preventDefault() : (e.returnValue = false);


    //let cancel=false;
    if (newValue !== this.currentValue) {
      console.log(newValue);
      let v: any = null;
      let p = {e: e, v: v}

      this.gblDoingBeforeUpdate = true;
      this.BeforeUpdate.emit(p);
      setTimeout(() => this.gblDoingBeforeUpdate = false, 100)


      //e.preventDefault ? e.preventDefault() : (e.returnValue = false);
      if (p.v) {
        this.cancelFlag = true;
        //this.ctrlSource=this.currentValue;
        //setTimeout(this.f(e),1000);
        this.f(e);
        //setTimeout(function(ee){console.log("FOCUS");ee.target.focus()},3000);
        //e.target.focus()

      } else {
        this.cancelFlag = false
        this.ctrlSource = e.target.value;
        this.currentValue = e.target.value;//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        this.count = 0;
        this.gblDoingAfterUpdate = true;
        this.AfterUpdate.emit(p);
        setTimeout(() => this.gblDoingAfterUpdate = false, 100)
        // e.target.value=this.formatterService.main(this.formatterFn,e.target.value,0)
      }

    }
    else {
      this.count = 0;
      // e.target.value=this.formatterService.main(this.formatterFn,e.target.value,0)


      //console.log("After afterUpdate")
    }

  }

  myFocus(e) {
    console.log('Cancel Flag: ' + this.cancelFlag);
    if (!this.cancelFlag) {
      console.log("Focus Event: " + e.target.value);

      // e.target.value=this.formatterService.main(this.formatterFn,e.target.value,1)
      this.currentValue = e.target.value;

      this.dontRepeat = false;

    } else {
      this.dontRepeat = true;
      // e.target.value=this.formatterService.main(this.formatterFn,e.target.value,1)
    }


  }

  myKeyDown(e) {
    if ((e.which == 27 || e.keyCode == 27)) {
      //this.ctrlSource = this.currentValue;
      e.target.value = this.currentValue;
      e.preventDefault();
    } else if ((e.which == 13 || e.keyCode == 13)) {
      //e.preventDefault();
      //e.stopPropagation();
      //e.keyCode=0;
      this.myBlur(e);

      // setTimeout(()=>e.target.value=this.formatterService.main(this.formatterFn,e.target.value,1),40);

      //e.preventDefault();


    }
  }

  doFormat(){

    // this.myElement.nativeElement.children[1].value=this.formatterService.main(this.formatterFn,this.myElement.nativeElement.children[1].value,0);

  }

}
