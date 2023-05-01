import { AfterViewInit, Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Map, Popup, Marker } from 'mapbox-gl';
import { WeatherStoreService } from '../services/weather-store.service';
import { ResponseWeatherMap } from '../interfaces/IResponseWeatherMap';

@Component({
  selector: 'location-city',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div #mapDiv class="map-container"></div>
  `,
  styles: [`
    .map-container {
      background-color: white;
      height: 100vh;
      position: fixed;
      top: 0px;
      width: 100vw;
    }
  `]
})
export class LocationCityComponent implements AfterViewInit {

  private _responseWeatherMap: ResponseWeatherMap | undefined;
  @Input() set responseWeatherMap(values: ResponseWeatherMap) {
    this._responseWeatherMap = values;
  }
  get responseWeatherMap(): ResponseWeatherMap { return this._responseWeatherMap!; }

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  storeService = inject(WeatherStoreService);

  ngOnDestroy(): void {
    this.storeService.clearState();
  }

  ngAfterViewInit(): void {
    this.initMap(this._responseWeatherMap!);
  }

  initMap(responseWeatherMap: ResponseWeatherMap) {
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      // center: [-74.006, 40.7143],
      center: [responseWeatherMap.coord?.lon!, responseWeatherMap.coord?.lat!],
      zoom: 9,
    });

    const popup = new Popup()
    .setHTML(`
      <h6>${responseWeatherMap?.name}</h6>
      <span>Humedad: ${responseWeatherMap.main?.humidity}%</span>
    `)

    new Marker({ color: 'red'})
      .setLngLat([responseWeatherMap.coord?.lon!, responseWeatherMap.coord?.lat!])
      .setPopup(popup)
      .addTo(map);
  }
}
