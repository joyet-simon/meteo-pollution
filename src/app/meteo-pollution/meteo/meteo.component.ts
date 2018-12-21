import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { City } from '../shared/models/city.model';
import { Meteo } from '../shared/models/meteo.model';

@Component({
  selector: 'mp-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnChanges {

  @Input() city: City;
  @Input() meteo: Meteo;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
