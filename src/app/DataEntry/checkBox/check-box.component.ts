import {Component, OnInit, Input, Output, EventEmitter, ElementRef} from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent implements OnInit {

  cancelFlag: boolean;
  cSource: any = '';

  dontRepeat: boolean;
  count: number;
  currentValue: boolean;
  gblDoingBeforeUpdate:boolean
  gblDoingAfterUpdate:boolean

  @Output() BeforeUpdate: EventEmitter<any> = new EventEmitter();
  @Output() AfterUpdate: EventEmitter<any> = new EventEmitter();

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





  constructor(public myElement: ElementRef) {
    this.cancelFlag = false;
    this.dontRepeat = false;
    this.count = 0;
    this.gblDoingAfterUpdate=false;
    this.gblDoingBeforeUpdate=false;
  }

  ngOnInit() {
  }

  t() {
    this.count = 0;
  }


  f($event) {
    //setTimeout(() => $event.target.focus(), 10);

    setTimeout(() => this.count = 0, 20);
  }

  myChange(e) {
    if(this.gblDoingBeforeUpdate)return;
    if(this.gblDoingAfterUpdate)return;
      // if (this.count !== 0) {
      //   this.count = 0;
      //   //this.f(e);
      //
      //   return
      // } else {
      //   this.count++;
      //
      // }
      let newValue = e.target.checked;

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

          e.target.checked=this.currentValue;
          this.ctrlSource = e.target.checked;
          this.count = 0;



        } else {
          this.cancelFlag = false;
          this.ctrlSource = e.target.checked;
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
      this.currentValue = e.target.checked;
      this.dontRepeat = false;
    } else {
      this.dontRepeat = true;

    }


  }


}
