import { Restaurants } from './../StaticData/RestaurantsData';
import { Injectable } from '@angular/core';
// import {Restaurants}

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor() { }
  restaurantsData = Restaurants;
  getRestaurantsData(){
    return this.restaurantsData;
  }
  
}
