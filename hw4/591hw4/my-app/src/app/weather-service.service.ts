import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pollutant } from './pollutant';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  apiURL: string = 'https://api.aerisapi.com/airquality/'
  
  apiURL2: string = '/?client_id=0pP7RoIiqg201Ow8dHTT1&client_secret=MBC8PO79Alo3l0Gg9YdvFQSaHuA2DVEYlMylqiP1';
  
  //zipURL = '02215';
  constructor(private httpClient: HttpClient) { }
  
  //public createPollutant(pollutant: Pollutant){}

  //public updatePollutant(customer: Customer){}

  //public deletePollutant(id: number){}

  public getPollutants(){
    return this.httpClient.get(this.apiURL + localStorage.getItem("zip") + this.apiURL2);
  }

}