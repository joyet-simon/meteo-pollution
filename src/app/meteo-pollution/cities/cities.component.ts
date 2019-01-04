import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { City } from '../shared/models/city/city.model';
import { Address } from '../shared/models/city/address.model';
import { CitiesService } from '../shared/services/cities/cities.service';

@Component({
  selector: 'mp-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {

  public cityForm: FormGroup;
  public cities: City[];
  @Output() onCity: EventEmitter<City>;

  constructor(private formBuilder: FormBuilder, private citiesService: CitiesService) {
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
      this.onCity.emit(city);
    }
  }

}
