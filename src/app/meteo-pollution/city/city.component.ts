import { Component, OnInit, Input } from '@angular/core';
import { City } from '../shared/models/city.model';
import { LocationIqService } from '../shared/services/location-iq.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city: City;
  statutLocation: number = 0;

  constructor(private locationIQService: LocationIqService, private snackBar: MatSnackBar) {
    this.findLocation();
  }

  ngOnInit() {
  }


  findLocation() {
    navigator.geolocation.getCurrentPosition(
      (event: Position) => this.findCityName(event),                               //success
      () => this.openSnackBar("Geolocation Error", "Retry"),                      // error
    );
  }

  findCityName(event: Position) {
    this.statutLocation = 1;
    this.locationIQService.get(event).subscribe(
      (reponse) => this.city = {
        name: reponse['address']['county']
      },
      () => this.openSnackBar("City Location Error", "Retry"),
    )
    this.statutLocation = 2;
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    }).onAction().subscribe(() => this.findLocation());
    this.statutLocation = 0;
    console.log(this.city.name);
    
  }





}
