import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { City } from '../shared/models/city/city.model';
import { Address } from '../shared/models/city/address.model';
import { CitiesService } from '../shared/services/cities/cities.service';
import { LocationIqService } from '../shared/services/location-iq/location-iq.service';
import { LocationIQ } from '../shared/models/city/location-iq.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'mp-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  public cityForm: FormGroup;
  public cities: City[];
  @Output() onCity: EventEmitter<City>;

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private citiesService: CitiesService, private locationIqService: LocationIqService) {
    this.cityForm = this.createCityForm();
    this.citiesService.get().subscribe((cities: City[]) => this.cities = cities);
    this.onCity = new EventEmitter;
  }

  createCityForm(): FormGroup {
    return this.formBuilder.group({
      cityName: ["", [
        Validators.minLength(2),
        Validators.maxLength(32),
      ]],
    });
  }

  onSubmit(event: MSInputMethodContext) {
    const input = event.target;
    const cityName: AbstractControl = this.cityForm.get("cityName");
    if (cityName.value && cityName.valid) {
      const city: City = new City;
      city.address = new Address;
      city.address.county = cityName.value;
      cityName.setValue("");
      this.locationIqService.getReverse(city).subscribe(
        () => {
          this.onCity.emit(city);
        },
        () => this.snackBar.open("This input isn't a city", "Ok")
      )
    }
  }

}
