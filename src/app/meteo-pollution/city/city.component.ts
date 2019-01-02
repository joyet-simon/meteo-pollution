import { Component, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/models/city/city.model';
import { LocationIqService } from '../shared/services/location-iq/location-iq.service';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { LocationIQ } from '../shared/models/city/location-iq.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  @Input() city: City;
  @Output() onCity: EventEmitter<City>;

  constructor(private locationIQService: LocationIqService, private snackBar: MatSnackBar) {
    this.findLocation();
    this.onCity = new EventEmitter;
  }

  findLocation() {
    navigator.geolocation.getCurrentPosition(
      (event: Position) => {                                                      //success
        this.city.position = event;                                               //
        this.findCityName();                                                      //
      },
      () => this.snackBar.open("Geolocation Error", "Retry").onAction().subscribe(() => this.findLocation()),                      // error
    );
  }

  findCityName(): Subscription {
    return this.locationIQService.get(this.city.position).subscribe(
      (locationIQ: LocationIQ) => {
        this.city.address = locationIQ.address;
        this.onCity.emit(this.city);
      },
      (error: HttpErrorResponse) => this.snackBar.open("City Location Error", "Retry").onAction().subscribe(() => this.findCityName())
    )
  }

}
