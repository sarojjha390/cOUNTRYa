import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CountryserviceService} from 'src/app/countryservice.service';






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
  name: string;
 
  
   
  
   Country:any;
  country=[];
  constructor(private httpClinet : HttpClient, 
              private restservice : CountryserviceService){  }

  ngOnInit(): void {

    this.getCountrys();

  }
    getCountrys(){ 


    this.restservice.getCountryData().subscribe(
        response => {
          console.log(response);
          this.Country = response;
          this.Countrys=this.Country.Countrys;

        }
      );
      }
       search(){
          this.Country =this.Country.filter(res =>{
            return res.Country.toLocaleLowerCase().match(this.Country.toLocaleLowerCase());
          });
        
      }

      
      
}

  
 
  


