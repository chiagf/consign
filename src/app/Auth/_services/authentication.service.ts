import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ConstantService } from '../../constant.service'

@Injectable()
export class AuthenticationService {

    currentUser: string = '';

    constructor(private http: HttpClient, private constantService: ConstantService) { }

    login(username: string, password: string): Observable<HttpResponse<any>> {
        let url = this.constantService.API_LOGIN;

        // const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        // // const myheader = new HttpHeaders().set('Content-Type', 'application/json')
        // let body = new HttpParams();
        // body = body.set('Email', username);
        // body = body.set('Password', password);
        // return this.http.post<HttpResponse<any>>(url, body, { observe: 'response',
        //     headers: myheader,  withCredentials: false}); // .map(this.extractData)

        let myheader = new HttpHeaders().set('Content-Type', 'application/json')
        myheader = myheader.set('chiaHeader', 'WWWWWWWWWWWWWWWWWWWWW');
        let options = {
            withCredentials: true,
            observe: 'response' as 'response',
            headers: myheader
            // params: new HttpParams().append('key', 'value'),
            // observe: 'response'

          }          
        return this.http.post<HttpResponse<any>>(url, { Email: username, Password: password, RemenberMe: true, returnUrl: '', __RequestVerificationToken:'UR3a0JgPMdmMfrx8VPp3JdqlFdboRRDhzux2yAxqQ_Fj0gTOaX0jjetf0N8iQNh7Nz6Z2_8qXbUVXfVlQZN0ajFYhtm4QMhm9pIOq__ZXTA1' }, options)
        // return this.http.post<HttpResponse<any>>(url, { Email: username, Password: password, RemenberMe: true, returnUrl: ''}, {observe: 'response'})
        
       
    }

    testLogin()  {
        let url = this.constantService.API_ENDPOINT + "Home/Contact"
        this.http.get(url, { responseType: 'text', withCredentials: true, }).subscribe(
            res => {
                console.log(res)
            },
            error => {
                console.log(error)
            }
        );
    }

    testLogout()  {
        let url = this.constantService.API_ENDPOINT + "Account/LogOff"
        this.http.post(url, {}, { responseType: 'text', withCredentials: true, }).subscribe(
            res => {
                console.log(res)
                this.currentUser = '';
            },
            error => {
                console.log(error)
            }
        );
    }

    private extractData(response: HttpResponse<any>) : HttpResponse<any>{
        let body = response; // response.json();
        // return body.data || {};
        return body ;
    }

    xxlogin(username: string, password: string) {
        return this.http.post<any>('/api/authenticate', { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    isLogIn() {

        return this.currentUser !=='' ? true : false;
        // if (localStorage.getItem('currentUser')) {
        //     //alert("false");
        //     return true
        // }   
        
        // return false
    }

    currentUserName() {
        // return JSON.parse(localStorage.getItem('currentUser')).username
        return this.currentUser;
    }
}