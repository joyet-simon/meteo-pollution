import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mp-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() city: string;
  
  constructor() { }

  ngOnInit() {
  }

  fus() {
    console.log("fus");

  }

}
