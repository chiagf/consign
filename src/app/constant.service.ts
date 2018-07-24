import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  API_ENDPOINT : string;
  CONSUMER_KEY : string;
  API_POSTDOC: string;
  API_LOGIN: string;
  constructor() {
    this.API_ENDPOINT = 'https://542fb19e.ngrok.io/';
    this.API_POSTDOC = this.API_ENDPOINT + 'data/PostDocument'
    this.API_LOGIN = this.API_ENDPOINT + 'Account/Login'
    this.CONSUMER_KEY = 'someReallyStupidTextWhichWeHumansCantRead'
   }

}
