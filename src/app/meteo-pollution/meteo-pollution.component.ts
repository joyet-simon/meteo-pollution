import { Component } from '@angular/core';
import { City } from './shared/models/city.model';
import { Meteo } from './shared/models/meteo.model';

@Component({
  selector: 'mp-meteo-pollution',
  templateUrl: './meteo-pollution.component.html',
  styleUrls: ['./meteo-pollution.component.scss']
})
export class MeteoPollutionComponent {

  public city: City;
  public meteo: Meteo;

  constructor() {
    this.city = new City;
  }

  addCity(city: City) {
    console.log("wait");
  }

}
