import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherData } from '../../models/weather.model';
import { WeatherService } from '../../services/weather.service';
import { SearchLocationComponent } from '../search-location/search-location.component';

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    SearchLocationComponent, 
    ReactiveFormsModule
  ],
  templateUrl: './weather-dashboard.component.html',
  styleUrl: './weather-dashboard.component.css'
})
export class WeatherDashboardComponent implements OnInit {
  weatherData: WeatherData | null = null;
  loading = false;
  error: string | null = null;
  currentDate = new Date();

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getCurrentLocationWeather();
  }

  getCurrentLocationWeather() {
    if ('geolocation' in navigator) {
      this.loading = true;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.weatherService.getWeatherByCoordinates(latitude, longitude)
            .subscribe({
              next: (data) => {
                this.weatherData = data;
                this.loading = false;
              },
              error: (err) => {
                this.error = 'Could not fetch weather data :(';
                this.loading = false;
              }
            });
        },
        (error) => {
          this.error = `Geolocation is not supported`;
          this.loading = false;
        }
      );
    }
  }

  searchCity(city: string) {
    this.loading = true;
    this.weatherService.getWeatherByCity(city)
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          this.loading = false;
        }, 
        error: (err) => {
          this.error = 'City not found :(';
          this.loading = false;
        }
      });
  }

  getWeatherIcon(iconCode: string): string {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  }
}
