import { Main } from './main.model';
import { Weather } from './weather.model';
import { Wind } from './wind.model';

export class Meteo {
    main: Main;
    wind: Wind;
    weather: Weather[];
}