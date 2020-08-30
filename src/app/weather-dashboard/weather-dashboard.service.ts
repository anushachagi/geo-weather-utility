import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherConstants } from './weather-dashboard.constant';

@Injectable()
export class WeatherService {

    constructor(private readonly http: HttpClient) {}

    public getWeatherForecast(location: string) {
        let params = new HttpParams();
        params = params.append('aggregateHours', WeatherConstants.AGGREGATE_HOURS);
        params = params.append('combinationMethod', WeatherConstants.COMBINATION_METHOD);
        params = params.append('contentType', WeatherConstants.CONTENT_TYPE);
        params = params.append('unitGroup', WeatherConstants.UNIT_GROUP);
        params = params.append('locationMode', WeatherConstants.LOCATION_MODE);
        params = params.append('key', WeatherConstants.KEY);
        params = params.append('locations', location);

        return this.http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast', {params});
    }
}
