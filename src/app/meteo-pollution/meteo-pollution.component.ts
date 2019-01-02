import { Component } from '@angular/core';
import { City } from './shared/models/city.model';
import { Meteo } from './shared/models/meteo.model';
import { Pollution } from './shared/models/pollution-model';

@Component({
  selector: 'mp-meteo-pollution',
  templateUrl: './meteo-pollution.component.html',
  styleUrls: ['./meteo-pollution.component.scss']
})
export class MeteoPollutionComponent {

  public city: City;
  public meteo: Meteo;
  public pollution: Pollution;

  constructor() {
    this.city = new City;
    this.meteo = new Meteo;
    this.pollution = new Pollution;
  }

  onCity(city: City) {
    this.city = city;
  }

  onMeteo(meteo: Meteo) {
    console.log(meteo);
  }

  onPollution(pollution: Pollution){
    console.log(pollution);
    
  }

}
