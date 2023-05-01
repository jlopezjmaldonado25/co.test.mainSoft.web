import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryWeatherCityComponent } from '../components/history-weather-city.component';
import { HistoryStoreService } from '../services/history-store.service';

@Component({
  selector: 'app-historial-screen',
  standalone: true,
  imports: [CommonModule, HistoryWeatherCityComponent],
  template: `
    <div class="columns">
      <div class="column" *ngIf="storeService.history$ | async as history">
          <history-weather-city
            [responseHistory]="history"
          ></history-weather-city>
      </div>
    </div>
  `,
})
export class HistorialScreenComponent implements OnInit {

  storeService   = inject(HistoryStoreService);

  ngOnInit(): void {
    this.storeService.getWeather();
  }


}
