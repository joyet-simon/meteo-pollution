import { Component, OnInit, Input } from '@angular/core';
import { City } from '../shared/models/city.model';

@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city: City;

  constructor() {
    this.findLocation();
  }

  ngOnInit() {
  }


  findLocation() {
    navigator.geolocation.getCurrentPosition(
      (event: Position) => this.findCityName(event),                        //success
      (event: PositionError) => alert("Loooooser!!!!!!!!!")                // error
    );
  }

  findCityName(event: Position) {
    alert("You win!!!");
  }

}
