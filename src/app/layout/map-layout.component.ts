import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ECiudades, EUrlCiudades } from '../weathermap/enums/ECiudades';

@Component({
  selector: 'map-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  template: `
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          Mainsoft
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" [routerLink]="['/home']" >
            Home
          </a>

          <a class="navbar-item" [routerLink]="'/map/ciudad/' + url_MIAMI">
            {{ciudad_MIAMI}}
          </a>

          <a class="navbar-item" [routerLink]="'/map/ciudad/' + url_ORLANDO">
            {{ciudad_ORLANDO}}
          </a>

          <a class="navbar-item" [routerLink]="'/map/ciudad/' + url_NUEVA_YORK">
            {{ciudad_NUEVA_YORK}}
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a class="bd-tw-button button"
                  [routerLink]="['/map/historial']">
                  <span>
                    Historial
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-outlet></router-outlet>
  `,
})
export class MapLayoutComponent implements OnInit {

  url_MIAMI      =  EUrlCiudades.MIAMI;
  url_NUEVA_YORK =  EUrlCiudades.NUEVA_YORK;
  url_ORLANDO    =  EUrlCiudades.ORLANDO;

  ciudad_MIAMI      =  ECiudades.MIAMI;
  ciudad_NUEVA_YORK =  ECiudades.NUEVA_YORK;
  ciudad_ORLANDO    =  ECiudades.ORLANDO;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    $navbarBurgers.forEach( el => {
      this.renderer.listen(el, 'click', () => {

        const target = el.dataset.target;
        const $target = document.getElementById(target)!;

        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
}
