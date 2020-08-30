import { environment } from 'src/environments/environment';

export class WeatherConstants {

    public static readonly AGGREGATE_HOURS = '24';
    public static readonly COMBINATION_METHOD = 'aggregate';
    public static readonly CONTENT_TYPE = 'json';
    public static readonly UNIT_GROUP = 'uk';
    public static readonly LOCATION_MODE = 'single';
    public static readonly KEY = environment.weatherSecretKey;
    public static readonly LOCATIONS = 'Bengaluru';
}
