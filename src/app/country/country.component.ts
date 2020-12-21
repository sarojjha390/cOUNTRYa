import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Countrys {
  title = 'app-country';
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];
}



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
      search(){
        if(this.Country == ""){
          this.ngOnInit();
        }else{
          this.country =this.country.filter(res =>{
            return res.Country.toLocaleLowerCase().match(this.Country.toLocaleLowerCase());
          });
        }
      }
}

  //   this.http.get('https://restcountries.eu/rest/v2/all')
  //   .subscribe (Response => { 
  
  //     // If response comes hideloader() function is called 
  //     // to hide that loader  
  //     if(Response){   
  //       hideloader(); 
  //     } 
 
  


