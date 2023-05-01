import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ResponseWeatherMap } from "../interfaces/IResponseWeatherMap";
import { WeatherApiService } from "../api/weather-api.service";


@Injectable({
  providedIn: 'root'
})
export class WeatherStoreService {

    private _weatherMap: BehaviorSubject<ResponseWeatherMap> =
      new BehaviorSubject(this._initState());

    get weatherMap$(): Observable<ResponseWeatherMap> {
        return this._weatherMap.asObservable();
    }

    constructor(
      private _weatherApiService: WeatherApiService
    ){}

    getWeather(ciudad: string): void {
        this._weatherApiService.getWeather(ciudad).subscribe({
            next: (response) => {
              this._weatherMap.next(response.data!);
            },error:(error) => {
              console.log(error);
            }
        })
    }

    private _initState(): ResponseWeatherMap {
      const responseWeatherMap: ResponseWeatherMap = {};
      return responseWeatherMap;
    }

    clearState() {
      this._weatherMap.next(this._initState());
    }
  }
