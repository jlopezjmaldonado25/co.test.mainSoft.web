import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boton-ciudad',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a (click)="OnCLickChangeCiudad(urlCiudad)" class="card" rel="noopener">
      <span>{{this.ciudad}}</span>
      <svg class="material-icons" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
    </a>
  `,
  styles: [`
    svg.material-icons {
      height: 24px;
      width: auto;
    }

    svg.material-icons:not(:last-child) {
      margin-right: 8px;
    }

    .card svg.material-icons path {
      fill: #888;
    }

    .card {
      all: unset;
      border-radius: 4px;
      border: 1px solid #296bb6;
      background-color: #fafafa;
      height: 40px;
      width: 200px;
      margin: 0 8px 10px;
      padding: 16px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease-in-out;
      line-height: 24px;
      cursor: pointer;
    }

    .card:not(:last-child) {
      margin-right: 0;
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    }

    .card:hover .material-icons path {
      fill: rgb(105, 103, 103);
    }

    @media screen and (max-width: 767px) {
      .card {
        height: 16px;
        margin: 8px 4px;
      }
    }
  `],
})
export class BotonCiudadComponent {

  private _ciudad: string = '';
  @Input() set ciudad(value: string) { this._ciudad = value; }
  get ciudad(): string { return this._ciudad; }

  private _urlCiudad: string = '';
  @Input() set urlCiudad(value: string) { this._urlCiudad = value; }
  get urlCiudad(): string { return this._urlCiudad; }

  @Input() coordenadas: [] = [];

  @Output() notifyOnChangedCiudad: EventEmitter<string> = new EventEmitter<string>();

  OnCLickChangeCiudad(ciudad: string) {
    this.notifyOnChangedCiudad.next(this._urlCiudad);
  }

}
