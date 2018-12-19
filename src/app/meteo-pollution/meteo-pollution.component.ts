import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-meteo-pollution',
  templateUrl: './meteo-pollution.component.html',
  styleUrls: ['./meteo-pollution.component.scss']
})
export class MeteoPollutionComponent implements OnInit {

  public city: string;

  constructor() {
    this.city = "Fus";
  }

  ngOnInit() {
  }

}
