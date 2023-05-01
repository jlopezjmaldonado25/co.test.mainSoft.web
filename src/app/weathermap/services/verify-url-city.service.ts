import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EUrlCiudades } from '../enums/ECiudades';

@Injectable({
  providedIn: 'root'
})
export class VerifyUrlCityService {

  verifyUrlCity(urlCity: string): Observable<boolean> {
    if (urlCity == EUrlCiudades.MIAMI) return of(true);

    if (urlCity == EUrlCiudades.NUEVA_YORK) return of(true);

    if (urlCity == EUrlCiudades.ORLANDO) return of(true);

    return of(false);
  }

}
