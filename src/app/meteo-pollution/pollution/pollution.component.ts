import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/models/city.model';
import { Pollution } from '../shared/models/pollution-model';
import { Aqicn } from '../shared/models/aqicn.model';
import { MatSnackBar } from '@angular/material';
import { AqicnService } from '../shared/services/aqicn.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'mp-pollution',
  templateUrl: './pollution.component.html',
  styleUrls: ['./pollution.component.scss']
})
export class PollutionComponent implements OnChanges {

  @Input() city: City;
  @Input() pollution: Pollution;
  @Output() onPollution: EventEmitter<Pollution>;

  constructor(private aqicnService: AqicnService, private snackBar: MatSnackBar) {
    this.onPollution = new EventEmitter;
  }

  ngOnChanges() {
    return this.aqicnService.get(this.city).subscribe(
      (aqicn: Aqicn) => {
        console.log(aqicn);
        
        this.pollution.aqi = aqicn.aqi;
        this.onPollution.emit(this.pollution);
      },
      (error: HttpErrorResponse) => this.snackBar.open(error.message, "Retry").onAction().subscribe(() => this.ngOnChanges())
    );
    
  }
}
