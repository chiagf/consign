import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { CheckBoxComponent } from '../DataEntry/checkBox/check-box.component';
// import { SelectComponent } from '../DataEntry/select/select.component';
// import { TextInputComponent } from '../DataEntry/textInput/text-input.component';
import { ConsignEditGuard, LogInGuard } from './business-guard.service';
import { TrackComponent } from './track/track.component';
import { DataEntryModule } from '../DataEntry/dataEntry.module';
import { ConsignComponent } from './consign/consign.component';
import { SharedModule } from '../myshare/shared.module';
import { ConsignService } from './consign/consign.service';


@NgModule({
    imports: [
        // BrowserModule,
        FormsModule,
        // HttpClientModule,
        CommonModule,
        DataEntryModule,
        SharedModule
    ],
    exports: [
        TrackComponent,
        ConsignComponent,
    ],
    declarations: [
        // CheckBoxComponent,
        // SelectComponent,
        // TextInputComponent
        TrackComponent ,
        ConsignComponent,
     ],
    providers: [
        ConsignService,
        ConsignEditGuard,
        LogInGuard,
    ],
    
})

export class BusinessModule { }