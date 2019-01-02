import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pollution } from '../models/pollution-model';
import { environment } from 'src/environments/environment';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class AqicnService {

  constructor(private http: HttpClient) { }

  get(city: City): Observable<Pollution> {
    return this.http.get<Pollution>(`https://api.waqi.info/feed/here/?token=${environment.aqicn}`)
  }
}
