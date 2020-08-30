import { Component, OnInit, Input } from '@angular/core';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  @Input() public weather: any;
  public dayName: string;
  public cloudColor: string;
  faCloud = faCloud;
  constructor() { }

  ngOnInit(): void {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(this.weather.datetimeStr);
    this.dayName = d.toString().split(' ')[0];
    if (this.weather.cloudcover < 25) {
      this.cloudColor = 'white';
    } else if (this.weather.cloudcover < 50) {
      this.cloudColor = 'rgb(240, 236, 236)';
    } else if (this.weather.cloudcover < 75) {
      this.cloudColor = 'rgb(224, 221, 221)';
    } else {
      this.cloudColor = 'rgb(189, 184, 184)';
    }
  }

}
