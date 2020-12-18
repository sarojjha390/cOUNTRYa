import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Country{

  constructor(
    
     name: string,
  ) {
  }

}

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  Countrys: Country[];
  

  // li:any; 
  // lis=[]; 
   Country:any;
  country=[];
  constructor(private httpClinet : HttpClient){  }

  ngOnInit(): void {

    this.getCountrys();

  }
    getCountrys(){ 


    return  this.httpClinet.get('https://restcountries.eu/rest/v2/all').subscribe(
        response => {
          console.log(response);
          this.Country = response;
          this.Countrys=this.Country.Countrys;

        }
      );
      }
      
}

 
  


