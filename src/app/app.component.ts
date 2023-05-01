import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <loader-spinner></loader-spinner>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'Test mainSoft Web';
}
