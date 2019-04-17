import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
    
  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit() {
  }
  pollutant = localStorage.getItem("pollutant");
  ppb = localStorage.getItem("ppb");
  
    
  onSelect(): void {
    this.weatherService.getPollutants().subscribe(data => {
        //didnt bother finding ozone specifically as it is always returned first
        this.pollutant = (data['response']['0']['periods']['0']['pollutants']['0']['name']);
        localStorage.setItem("pollutant", this.pollutant)
        //get the ppb for this first pollutant (ozone)
        this.ppb = (data['response']['0']['periods']['0']['pollutants']['0']['valuePPB']);
        localStorage.setItem("ppb", this.ppb)
        console.log(data['response'])
    });
  }

}

