import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from 'src/data/countries';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-paysafrique',
  templateUrl: './paysafrique.component.html',
  styleUrls: ['./paysafrique.component.css']
})
export class PaysafriqueComponent implements OnInit {
  countries: any[] = [];
  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.initializeCountries();
  }
  initializeCountries() {
    this.countries = this.apiService.getAllcountries().map(function (el) {
      let Obj: any = {
        countrieName: el.name?.official,
        countrieImage: el.flags?.png,
        countrieRegion: el.region
      }
      return Obj;
    }).filter((el) => {
      return (el.countrieRegion == 'Africa') && el;
    });
  }
  search($event: any) {
    const { value } = $event.target
    if (value === '') {
      this.initializeCountries();
    }
    this.countries = this.countries.filter((el) => {
      return (el && el.countrieName && el.countrieRegion) && el.countrieName.toLowerCase().includes(value.toLowerCase())
    })
  }

}
