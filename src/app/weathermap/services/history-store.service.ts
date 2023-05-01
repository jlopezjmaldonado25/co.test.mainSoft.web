import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { WeatherApiService } from "../api/weather-api.service";
import { ResponseHistory } from "../interfaces/IResponseHistory";


@Injectable({
  providedIn: 'root'
})
export class HistoryStoreService {

    private _history: BehaviorSubject<ResponseHistory[]> =
      new BehaviorSubject(this._initState());

    get history$(): Observable<ResponseHistory[]> {
        return this._history.asObservable();
    }

    constructor(
      private _weatherApiService: WeatherApiService
    ){}

    getWeather(): void {
        this._weatherApiService.getHistory().subscribe({
            next: (response) => {
              this._history.next(response.data!);
            },error:(error) => {
              console.log(error);
            }
        })
    }

    private _initState(): ResponseHistory[] {
      const responseHistory: ResponseHistory[] = [];
      return responseHistory;
    }

    clearState() {
      this._history.next(this._initState());
    }
  }
