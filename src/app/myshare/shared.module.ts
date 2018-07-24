import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { xLoadingComponent } from './xloading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    xLoadingComponent
  ],
  declarations: [
    xLoadingComponent,
    
  ]
})
export class SharedModule { }
