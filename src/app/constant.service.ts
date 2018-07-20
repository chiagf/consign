import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  API_ENDPOINT : string;
  CONSUMER_KEY : string;
  API_POSTDOC: string
  constructor() {
    this.API_ENDPOINT = 'https://api.somedomain.com/v1/';
    this.API_POSTDOC = this.API_ENDPOINT + '/data/PostDocument'
    this.CONSUMER_KEY = 'someReallyStupidTextWhichWeHumansCantRead'
   }

}
