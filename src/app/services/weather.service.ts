import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather'

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string): Observable<WeatherData>{
    const url = `${this.apiUrl}?q=${city}&appid=${environment.openWeatherMapApiKey}&units=metric`;

    return this.http.get(url).pipe(
      map((response: any) => ({
        temperature: response.main.temp,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        cityName: response.name,
        country: response.sys.country
      }))
    );
  }

  getWeatherByCoordinates(lat: number, lon: number): Observable<WeatherData>{
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${environment.openWeatherMapApiKey}&units=metric`

    return this.http.get(url).pipe(
      map((response: any) => ({
        temperature: response.main.temp,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        cityName: response.name,
        country: response.sys.country
      }))
    );
  }
}
