import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather-dashboard.service';

@Component({
  selector: 'app-weather-dashboard',
  templateUrl: './weather-dashboard.component.html',
  styleUrls: ['./weather-dashboard.component.css']
})
export class WeatherDashboardComponent implements OnInit {

  public weatherDetails = [];
  public location = 'Bangalore';

  constructor(private readonly weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherInfo(this.location);
  }

  getWeatherInfo(location: string): void {
    this.weatherService.getWeatherForecast(this.location).subscribe((response: any) => {
      console.log('weatherResponse', response);
      this.weatherDetails = response.location?.values;
      this.weatherDetails = this.weatherDetails.slice(0, 6);
    });
  }

  onLocationChange(location: string): void {
    this.getWeatherInfo(location);
  }

}
