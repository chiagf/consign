import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router'
import 'rxjs/add/operator/filter';
import {  AuthenticationService } from './Auth/_services/authentication.service';
// import {  AuthenticationService } from './auth/_services/index';

import '../assets/app.css';



@Component({
    moduleId: module.id.toString(),
    selector: 'app',
    templateUrl: 'app.component.html',   
    styleUrls: ["app.component.css"]   

})

export class AppComponent {
    [x: string]: any;
    pageTitle: string = 'Parcel Management';

    // constructor(  private router: Router){  
    constructor(private authenticationService: AuthenticationService,  private router: Router){      
        // this.activatedRoute.url.subscribe(url =>{
        //     console.log(url);
        //     }
        // );
        // router.events.subscribe((val) => console.log(val.NavigationStart.url))
        router.events
        .filter(event => event instanceof NavigationStart)
        .subscribe((event:NavigationStart) => {
            console.log(event.url);
            if (event.url === '/logout') {
                // this.authenticationService.logout();
            }
            
        });
    }

   

    ifLogIn() {
        return this.authenticationService.isLogIn();
    }

    curUserName() {
        return this.authenticationService.currentUserName();
    }
 }