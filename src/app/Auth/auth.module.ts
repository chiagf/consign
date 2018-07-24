import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers';

import { AuthComponent }  from './auth.component';
import { authRouting }        from './auth.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from '../myshare/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        authRouting,
        SharedModule,        
    ],
    declarations: [
        AuthComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        // xLoadingComponent,
        
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    // bootstrap: [AppComponent]
})

export class AuthModule { }