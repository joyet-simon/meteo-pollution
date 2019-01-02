import { Main } from './main.model';
import { Weather } from './weather.model';
import { Wind } from './wind.model';

export class OpenWeatherMap {
    main: Main;
    weather: Weather[];
    wind: Wind;
}