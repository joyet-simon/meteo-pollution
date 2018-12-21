import { Component, OnInit, Input } from '@angular/core';
import { City } from '../shared/models/city.model';
import { Meteo } from '../shared/models/meteo.model';

@Component({
  selector: 'mp-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  @Input() city: City;
  @Input() meteo: Meteo;

  constructor() { }

  ngOnInit() {
  }

}
