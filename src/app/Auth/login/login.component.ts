import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services';
// import { HttpResponse } from '../../../../node_modules/@types/selenium-webdriver/http';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    // model: any = {};
    model = {username: 'chiagf@gmail.com', password: '123456'}
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    this.authenticationService.currentUser = this.model.username;
                    console.log(data);
                    console.log(data.headers)
                    console.log(data.headers.get('pragma'));
                    console.log(data.headers.get('Set-Cookie'));
                    this.loading = false;                    
                },
                error => {
                    this.authenticationService.currentUser = '';
                    this.alertService.error(error);
                    console.log(error);
                    alert("Failed to Login");
                    this.loading = false;
                });
    }

    testLogin() {
        this.authenticationService.testLogin();
    }

    testLogout() {
        this.authenticationService.testLogout().subscribe(
            res => {
                console.log(res)
            },
            error => {
                console.log(error)
            }
        );;
    }
}
