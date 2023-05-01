import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainApiService } from 'src/app/core/main.service';
import { IResponseWeatherMap } from '../interfaces/IResponseWeatherMap';
import { IResponseHistory } from '../interfaces/IResponseHistory';

@Injectable({
    providedIn: 'root'
})
export class WeatherApiService extends MainApiService {

    constructor(
        private _httpClient: HttpClient,
    ){
        super();
    }

    getWeather(ciudad: string): Observable<IResponseWeatherMap> {
        return this._httpClient.get<IResponseWeatherMap>(
            `${this.apiUrl}/GetWeather/Ciudad/${ciudad}`,
            { headers: this.getHeaders() }
        );
    }

    getHistory(): Observable<IResponseHistory> {
        return this._httpClient.get<IResponseHistory>(
            `${this.apiUrl}/GetHistory`,
            { headers: this.getHeaders() }
        );
    }


}
