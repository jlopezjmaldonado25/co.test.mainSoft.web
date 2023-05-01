import { Component, inject } from '@angular/core';
import { ECiudades, EUrlCiudades } from '../weathermap/enums/ECiudades';
import { Router, RouterModule } from '@angular/router';
import { BotonCiudadComponent } from './components/boton-ciudad.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  template:  `
    <div class="content" role="main">
      <h2>Clima</h2>
      <p>Consulta la Humedad de las Siguientes Ciudades:</p>

      <div class="card-container">
        <app-boton-ciudad
          (notifyOnChangedCiudad)="OnChangedCiudad($event)"
          [ciudad]="ciudad_MIAMI" [urlCiudad]="url_MIAMI">
        </app-boton-ciudad>

        <app-boton-ciudad
          (notifyOnChangedCiudad)="OnChangedCiudad($event)"
          [ciudad]="ciudad_NUEVA_YORK" [urlCiudad]="url_NUEVA_YORK">
        </app-boton-ciudad>

        <app-boton-ciudad
          (notifyOnChangedCiudad)="OnChangedCiudad($event)"
          [ciudad]="ciudad_ORLANDO" [urlCiudad]="url_ORLANDO">
        </app-boton-ciudad>
      </div>

      <footer>
          <a [routerLink]="['/map/historial']" rel="noopener"> Ver Historial.
          </a>
          <a [routerLink]="['/map/historial']" rel="noopener">
            <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#1976d2"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </a>
      </footer>
    </div>
  `,
  styles: [`
    :host {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 14px;
      color: #333;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .content {
      display: flex;
      margin: 12px auto 32px;
      padding: 0 16px;
      max-width: 960px;
      flex-direction: column;
      align-items: center;
    }

    .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 16px;
    }

    @media screen and (max-width: 767px) {
    }
  `],
  imports: [CommonModule, BotonCiudadComponent, RouterModule],
  standalone: true
})
export class HomeComponent {

  ciudad_MIAMI      =  ECiudades.MIAMI;
  ciudad_NUEVA_YORK =  ECiudades.NUEVA_YORK;
  ciudad_ORLANDO    =  ECiudades.ORLANDO;

  url_MIAMI      =  EUrlCiudades.MIAMI;
  url_NUEVA_YORK =  EUrlCiudades.NUEVA_YORK;
  url_ORLANDO    =  EUrlCiudades.ORLANDO;

  private _router = inject(Router)

  OnChangedCiudad($event: string) {
    const redirectURL = `/map/ciudad/${$event}`;
    this._router.navigateByUrl(redirectURL);
  }
}
