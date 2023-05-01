import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponseHistory } from '../interfaces/IResponseHistory';

@Component({
  selector: 'history-weather-city',
  standalone: true,
  imports: [CommonModule],
  template: `
    <table class="table">
      <thead>
        <tr>
          <th><abbr title="Position">Id</abbr></th>
          <th><abbr title="Position">Ciudad</abbr></th>
          <th>Fecha Registro</th>
          <th><abbr title="Played">Ver Detalle</abbr></th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of responseHistory">
          <th>{{item.id}}</th>
          <td><strong>{{ item.city }}</strong></td>
          <td>{{item.created_at}}</td>
          <td>{{item.history_weather | json}}</td>
        </tr>
      </tbody>
    </table>
  `,
})
export class HistoryWeatherCityComponent {

  private _responseHistory!: ResponseHistory[];
  @Input() set responseHistory(values: ResponseHistory[]) {
    this._responseHistory = values;
  }
  get responseHistory(): ResponseHistory[]
    { return this._responseHistory; }

}
