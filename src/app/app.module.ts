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

import { WelcomeComponent } from './Home/welcome.component';
import { BusinessModule } from './Business/business.module';
import { ConstantService } from './constant.service';
import { SharedModule } from './myshare/shared.module';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        appRouting, 
        AuthModule,
        DataEntryModule,
        BusinessModule,
        SharedModule,
        // RouterModule.forRoot([
        //     { path: 'welcome', component: WelcomeComponent },
        //     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        //     { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        //   ]),
    ],
    declarations: [
        AppComponent,
        WelcomeComponent,
        // ConsignComponent,
        // TextInputComponent,
        // SelectComponent,
        
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
        // ConsignService,
        ConstantService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }