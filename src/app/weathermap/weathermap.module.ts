import { NgModule } from '@angular/core';
import { WeatherMapRoutingModule } from './weathermap-routing.module';
import { WeatherStoreService } from './services/weather-store.service';
import { MapScreenComponent } from './screens/map-screen.component';
import { CommonModule } from '@angular/common';
import { HumidityCityComponent } from "./components/humidity-city.component";
import { LocationCityComponent } from "./components/location-city.component";

@NgModule({
    declarations: [
        // MapScreenComponent
    ],
    // providers: [
    //     WeatherStoreService
    // ],
    imports: [
        WeatherMapRoutingModule,
        // CommonModule,
        // HumidityCityComponent,
        // LocationCityComponent
    ]
})
export class WeatherMapModule { }
