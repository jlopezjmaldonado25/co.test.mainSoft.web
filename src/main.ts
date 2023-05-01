import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1IjoiamxvcGV6am1hbGRvbmFkbzI1IiwiYSI6ImNsaDN3ZmV2MzFyZHgzZ3FoZ2pxY2RjbmoifQ.VItZwl68RTitoMKktdOczQ';



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
