import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumidityCityComponent } from '../components/humidity-city.component';
import { LocationCityComponent } from '../components/location-city.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { WeatherStoreService } from '../services/weather-store.service';

@Component({
  selector: 'app-map-screen',
  standalone: true,
  imports: [
    CommonModule,
    HumidityCityComponent,
    LocationCityComponent,
    RouterModule
  ],
  template:  `
    <section class="section p-4">
      <div class="container">
        <div class="columns">
          <div class="column is-4">
            <div class="has-text-centered">
              <humidity-city></humidity-city>
            </div>
          </div>

          <div class="column" *ngIf="storeService.weatherMap$ | async as weatherMap">
            <ng-container *ngIf="weatherMap.name != null || weatherMap.name != undefined">
              <location-city
                [responseWeatherMap]="weatherMap"
              ></location-city>
            </ng-container>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MapScreenComponent implements OnInit, OnDestroy {

  storeService   = inject(WeatherStoreService);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this.storeService.clearState();
      let ciudad = params['ciudad'];
      if(ciudad == 'nueva-york') {
        ciudad = 'New%20York';
      }
      this.storeService.getWeather(ciudad);
    });
  }

  ngOnDestroy(): void {
    this.storeService.clearState();
  }

}
