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
    this.city = new City;
    this.meteo = new Meteo;
    this.pollution = new Pollution;
  }

  addCity(city: City) {
    
  }

  addMeteo(meteo: Meteo) {   
  }

  addPollution(pollution: Pollution) {
  }

}
