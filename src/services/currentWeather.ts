import axios from "axios";
import { API_KEY } from "./api_key";

export interface Metric {
  Value: number;
  Unit: string;
  UnitType: number;
}
export interface Imperial {
  Value: number;
  Unit: string;
  UnitType: number;
}
export interface Temperature {
  Metric: Metric;
  Imperial: Imperial;
}
export interface CurrentWeatherRootObject {
  LocalObservationDateTime: Date;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: any;
  IsDayTime: boolean;
  Temperature: Temperature;
  MobileLink: string;
  Link: string;
}

const currentWeatherUrl = 'https://dataservice.accuweather.com/currentconditions/v1';

export async function getCurrentWeatherService(location_key: string): Promise<CurrentWeatherRootObject> {
  const { data } = await axios.get(`${currentWeatherUrl}/${location_key}?apikey=${API_KEY}`);
  return data[0];
}