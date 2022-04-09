import { Injectable } from '@angular/core';
import { COUNTRIES } from 'src/data/countries';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  getAllcountries() {
    return COUNTRIES;
  }

 
}
