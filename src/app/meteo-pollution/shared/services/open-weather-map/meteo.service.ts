import { Injectable } from '@angular/core';
import { Meteo } from '../../models/meteo/meteo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../../models/city/city.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  get(city: City): Observable<Meteo> {
    return this.http.get<Meteo>(`http://api.openweathermap.org/data/2.5/weather?q=${city.address.county}&APPID=${environment.openWeatherMap}&format=json&units=metric `);
  }
}
