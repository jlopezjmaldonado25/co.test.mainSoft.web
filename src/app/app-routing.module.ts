import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  useHash: true,
  enableTracing: false
};

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  },
  {
    path: 'map',
    loadChildren: () => import('./weathermap/weathermap.module').then( m => m.WeatherMapModule )
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerConfig),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
