import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

// ?????????????????????????????????????????????????????????????????????
// https://hassantariqblog.wordpress.com/2016/10/28/angular2-error-cant-bind-to-ngforof-since-it-isnt-a-known-property/
// import { BrowserModule } from '@angular/platform-browser';
// BrowserModule can only appear in app.module.ts and NOT in any Sub-Modules!!!!!

import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckBoxComponent } from './checkBox/check-box.component';
import { SelectComponent } from './select/select.component';
import { TextInputComponent } from './textInput/text-input.component';

@NgModule({
    imports: [
        CommonModule,
        // BrowserModule,
        FormsModule,
        HttpClientModule,
        
    ],
    exports: [
        CheckBoxComponent,
        SelectComponent,
        TextInputComponent
    ],
    declarations: [
        CheckBoxComponent,
        SelectComponent,
        TextInputComponent
    ],
    providers: [
      
    ],
    
})

export class DataEntryModule { }