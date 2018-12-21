import { Component, OnInit } from '@angular/core';
import { City } from './shared/models/city.model';
import { Meteo } from './shared/models/meteo.model';

@Component({
  selector: 'mp-meteo-pollution',
  templateUrl: './meteo-pollution.component.html',
  styleUrls: ['./meteo-pollution.component.scss']
})
export class MeteoPollutionComponent implements OnInit {

  public city: City;
  public meteo: Meteo;
  modeBar: string ;

  constructor() {
    this.city = new City();
  }

  ngOnInit() {
  }

  isStatutCity() {
    if (this.city.name === "undefined") {
      this.modeBar= "indeterminate";
    } else {
      this.modeBar= "query";
    }
    console.log(this.city.name);
    
    return this.modeBar;
  }

}
