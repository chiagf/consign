import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { HttpModule } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';

import { AppComponent }  from './app.component';
import { appRouting }        from './app.routing';

import {AuthModule} from './Auth/auth.module';
import {DataEntryModule} from './DataEntry/dataEntry.module'

import { RouterModule } from '@angular/router';
// import { AlertComponent } from './_directives/index';
// import { AuthGuard } from './_guards/index';
// import { JwtInterceptor } from './_helpers/index';
// import { AlertService, AuthenticationService, UserService } from './_services/index';
// import { HomeComponent } from './home/index';
// import { LoginComponent } from './login/index';
// import { RegisterComponent } from './register/index';
import { WelcomeComponent } from './Home/welcome.component';
import { ConsignComponent } from './Business/consign/consign.component';
import { BusinessModule } from './Business/business.module';
import { TextInputComponent } from './DataEntry/textInput/text-input.component';
import { SelectComponent } from './DataEntry/select/select.component';
import { ConsignService } from './Business/consign/consign.service';
// import {TextInputComponent}  from './DataEntry/textInput/text-input.component'
// import { AuthenticationService } from './auth/_services/authentication.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        appRouting, 
        AuthModule,
        DataEntryModule,
        BusinessModule,
        // RouterModule.forRoot([
        //     { path: 'welcome', component: WelcomeComponent },
        //     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        //     { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        //   ]),
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        ConsignComponent,
        TextInputComponent,
        SelectComponent,
        
        // AlertComponent,
        // HomeComponent,
        // LoginComponent,
        // RegisterComponent
    ],
    providers: [
        // AuthGuard,
        // AlertService,
        // AuthenticationService,
        // UserService,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: JwtInterceptor,
        //     multi: true
        // },

        // provider used to create fake backend
        // fakeBackendProvider
        ConsignService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }