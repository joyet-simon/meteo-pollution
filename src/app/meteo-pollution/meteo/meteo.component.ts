import { Component, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';
import { City } from '../shared/models/city/city.model';
import { Meteo } from '../shared/models/meteo/meteo.model';
import { MeteoService } from '../shared/services/open-weather-map/meteo.service';
import { MatSnackBar } from '@angular/material';
import { OpenWeatherMap } from '../shared/models/meteo/open-weather-map.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'mp-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit, OnChanges {

  @Input() city: City;
  @Input() meteo: Meteo
  @Output() onMeteo: EventEmitter<Meteo>;

  constructor(private MeteoService: MeteoService, private snackBar: MatSnackBar) {
    this.onMeteo = new EventEmitter;
  }

  ngOnInit() { }

  ngOnChanges() {
    if (this.city && this.city.address && !this.meteo) {
      this.findMeteo()
    }
  }

  findMeteo() {
    return this.MeteoService.get(this.city).subscribe(
      (openWeatherMap: OpenWeatherMap) => {
        const meteo = new Meteo;
        meteo.main = openWeatherMap.main;
        meteo.weather = openWeatherMap.weather;
        meteo.wind = openWeatherMap.wind;
        this.onMeteo.emit(meteo);        
      },
      (error: HttpErrorResponse) => this.snackBar.open(error.message, "Retry").onAction().subscribe(() => this.ngOnChanges())
    );
  }
}
