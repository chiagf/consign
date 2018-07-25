import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './Auth/home/home.component';
// import { AuthGuard } from './Auth/_guards/auth.guard';
import { LoginComponent } from './Auth/login/login.component';
// import { RegisterComponent } from './Auth/register/index';
import { WelcomeComponent } from './Home/welcome.component';
import { ConsignComponent } from './Business/consign/consign.component';
import { ConsignEditGuard, LogInGuard } from './Business/business-guard.service';
import { TrackComponent } from './Business/track/track.component';

// import { HomeComponent } from './home/index';
// import { LoginComponent } from './login/index';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    //{ path: '', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'track', component: TrackComponent },
    { path: 'consign/:id', canActivate: [LogInGuard], canDeactivate: [ConsignEditGuard], component: ConsignComponent },    
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    // { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRouting = RouterModule.forRoot(appRoutes);