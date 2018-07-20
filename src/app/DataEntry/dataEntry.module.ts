import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CheckBoxComponent } from './checkBox/check-box.component';
import { SelectComponent } from './select/select.component';
import { TextInputComponent } from './textInput/text-input.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        
    ],
    declarations: [
        CheckBoxComponent,
        // SelectComponent,
        // TextInputComponent
    ],
    providers: [
      
    ],
    
})

export class DataEntryModule { }