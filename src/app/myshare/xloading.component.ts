import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xapp-loading',
  templateUrl: './xloading.component.html',
  styleUrls: ['./xloading.component.css']
})
export class xLoadingComponent implements OnInit {
  @Input() loading: boolean = true;  
  constructor() { }

  ngOnInit() {
  }

}
