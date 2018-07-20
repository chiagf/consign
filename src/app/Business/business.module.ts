import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckBoxComponent } from '../DataEntry/checkBox/check-box.component';
import { SelectComponent } from '../DataEntry/select/select.component';
import { TextInputComponent } from '../DataEntry/textInput/text-input.component';
import { ConsignEditGuard, LogInGuard } from './business-guard.service';

@NgModule({
    imports: [
        // BrowserModule,
        // FormsModule,
        // HttpClientModule,
        
    ],
    declarations: [
        // CheckBoxComponent,
        // SelectComponent,
        // TextInputComponent
    ],
    providers: [
        ConsignEditGuard,
        LogInGuard,
    ],
    
})

export class BusinessModule { }