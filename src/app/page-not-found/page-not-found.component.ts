import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'page-not-found',
  host      : {'class': 'not-found'},
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="not-found">
      <div class="error-container">
        <p class="is-3by4">404</p>
        <p>Lo sentimos, la página que estás buscando no existe.</p>
        <a routerLink="home">Volver al inicio</a>
      </div>
    </div>
  `,
  styles: [`
    .not-found .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: Arial, sans-serif;
      font-size: 1.5rem;
    }

    .not-found .error-container p {
      margin: 2rem 0;
    }

    .not-found .error-container a {
      display: inline-block;
      padding: 0.5rem 1rem;
      background-color: #1abc9c;
      color: #fff;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: background-color 0.2s ease-in-out;
    }

    .not-found .error-container a:hover {
      background-color: #16a085;
    }
  `]
})
export class PageNotFoundComponent {}
