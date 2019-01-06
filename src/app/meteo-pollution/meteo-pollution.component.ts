import { Component } from '@angular/core';
import { City } from './shared/models/city/city.model';
import { Meteo } from './shared/models/meteo/meteo.model';
import { Pollution } from './shared/models/pollution/pollution-model';
import { CitiesService } from './shared/services/cities/cities.service';

@Component({
  selector: 'mp-meteo-pollution',
  templateUrl: './meteo-pollution.component.html',
  styleUrls: ['./meteo-pollution.component.scss']
})
export class MeteoPollutionComponent {

  public city: City;
  public meteo: Meteo;
  public pollution: Pollution;

  constructor(private citiesService: CitiesService) {
  }

  setCity(city: City) {
    this.onCity(city);
    this.addCity(this.city);
  }

  onCity(city: City) {
    this.city = city;
    this.meteo = null;
    this.pollution = null;    
  }

  addCity(city: City) {
    this.citiesService.post(city);
  }

  setMeteo(meteo: Meteo) {
    this.meteo = meteo;
  }

  setPollution(pollution: Pollution) {
    this.pollution = pollution;
  }

}
