import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryserviceService {

  constructor( private httpClinet : HttpClient) { }

  getCountryData(){ return  this.httpClinet.get('https://restcountries.eu/rest/v2/all')}


}
