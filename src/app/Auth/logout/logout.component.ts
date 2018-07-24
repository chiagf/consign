import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services';

// import {xLoadingComponent} from '../../xloading.component'

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'logout.component.html'
})

export class LogoutComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout(); 
        this.loading = true;
        this.authenticationService.testLogout().subscribe(
            (res) => {

            },
            (error) =>
            {
                console.log(error);
                alert(error);
            },
            () => {
                this.loading = false;
            }
        );
        }

   
}
