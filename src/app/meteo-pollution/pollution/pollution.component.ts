import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { City } from '../shared/models/city/city.model';
import { Pollution } from '../shared/models/pollution/pollution-model';
import { Aqicn } from '../shared/models/pollution/aqicn.model';
import { MatSnackBar } from '@angular/material';
import { AqicnService } from '../shared/services/aqicn/aqicn.service';
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
    if (this.city && this.city.address && !this.pollution) {
      this.findPollution();
    }
  }

  findPollution() {
    return this.aqicnService.get(this.city).subscribe(
      (aqicn: Aqicn) => {
        const pollution = new Pollution;
        pollution.data = aqicn.data;
        this.onPollution.emit(pollution);
      },
      (error: HttpErrorResponse) => this.snackBar.open(error.message, "Retry").onAction().subscribe(() => this.ngOnChanges())
    );
  }
}
