import { RestaurantsService } from './../../service/restaurants.service';
import { Component, OnInit } from '@angular/core';
// import {RestaurantsService}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private rest:RestaurantsService) { }
  resta;
  originalData;
  searchTerm:String;

  ngOnInit(): void {
    this.resta = this.rest.getRestaurantsData();
    this.originalData = this.resta;
  }

  Search(){
    if(this.searchTerm !=""){
      this.resta = this.resta.filter(res=>{
        return res.name.toLowerCase().match(this.searchTerm.toLowerCase());
      })
      this.resta = this.resta.sort((a,b)=>(a.priority>b.priority) ? 1 : -1);
    }else if(this.searchTerm==""){
      this.resta = this.originalData;
    }

  }
}
