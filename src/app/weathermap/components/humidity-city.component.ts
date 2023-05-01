import { Component, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherStoreService } from '../services/weather-store.service';

@Component({
  selector: 'humidity-city',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="card-image">
          <img
            src="http://openweathermap.org/img/wn/10d@4x.png"
            class="is-vcentered"
            alt="Weather description"
          />
      </div>
      <div class="card-content pt-0" *ngIf="(storeService.weatherMap$ | async) as weatherMap">
        <div class="media">
          <div class="media-content">
            <p class="title is-4 is-vcentered">{{ weatherMap?.name }}</p>
            <p class="subtitle is-10 is-vcentered">Humedad</p>
          </div>
        </div>

        <div class="content">
          <p class="title is-size-6-fullhd is-vcentered">{{ weatherMap.main?.humidity }}%</p>
        </div>
      </div>
    </div>
  `,
})
export class HumidityCityComponent implements OnDestroy {
  storeService = inject(WeatherStoreService);

  ngOnDestroy(): void {
    this.storeService.clearState();
  }

}
