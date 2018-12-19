import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoPollutionComponent } from './meteo-pollution.component';
import { CityComponent } from './city/city.component';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [
    MeteoPollutionComponent,
    CityComponent,
    CitiesComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MeteoPollutionComponent,
  ],
})
export class MeteoPollutionModule { }

