import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LocationIQ } from '../../models/city/location-iq.model';
import { City } from '../../models/city/city.model';

@Injectable({
  providedIn: 'root'
})
export class LocationIqService {

  constructor(private http: HttpClient) { }

  get(position: Position): Observable<LocationIQ> {
    return this.http.get<LocationIQ>(`https://eu1.locationiq.com/v1/reverse.php?key=${environment.locationIQ}&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
  }

  getReverse(city: City): Observable<LocationIQ> {
    return this.http.get<LocationIQ>(`https://eu1.locationiq.com/v1/search.php?key=${environment.locationIQ}&q=${city.address.county}&format=json`);
  }
}
