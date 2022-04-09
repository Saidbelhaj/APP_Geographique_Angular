import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details-oceania',
  templateUrl: './details-oceania.component.html',
  styleUrls: ['./details-oceania.component.css']
})
export class DetailsOceaniaComponent implements OnInit {

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
        countrieRegion: el.region,
        countriePopu: el.population,
        countrieAria: el.area
      }
      return Obj;
    }).filter((el) => {
      return (el.countrieRegion == 'Oceania') && el;
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
