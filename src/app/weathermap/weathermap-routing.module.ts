import { NgModule, inject } from '@angular/core';
import { Routes, RouterModule, ResolveFn, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from '@angular/router';
import { MapScreenComponent } from './screens/map-screen.component';
import { HistorialScreenComponent } from './screens/historial-screen.component';
import { MapLayoutComponent } from '../layout/map-layout.component';
import { VerifyUrlCityService } from './services/verify-url-city.service';
import { Observable, map, of } from 'rxjs';

export const urlCityResolver: ResolveFn<Observable<boolean>> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      inject(VerifyUrlCityService).verifyUrlCity(route.paramMap.get('ciudad')!).pipe(map((res) => {
        const redirectURL = 'page-not-found';
        if(!res) inject(Router).navigateByUrl(redirectURL);
      })).subscribe();
    return of(true);
  };

const routes: Routes = [
  {
    path: '',
    component: MapLayoutComponent,
    children: [
      {
        path: 'historial',
        component: HistorialScreenComponent
      },
      {
        path: 'ciudad/:ciudad',
        component: MapScreenComponent,
        resolve: {isUrl: urlCityResolver}
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherMapRoutingModule { }
