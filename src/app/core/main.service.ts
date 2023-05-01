import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class MainApiService {
    public apiUrl        = environment.apiUrl;
    public production    = environment.production;
    private headers = new HttpHeaders();

    constructor() {
        this.headers = this.headers.set('Content-Type','application/json');
    }

    getHeaders(): HttpHeaders {
        return this.headers;
    }

    setHeader(key: string, value: string): void {
        this.headers.set(key, value);
    }

    /**
     * Transforma un objeto en queryparams.
     *
     * @param {*} object
     * @return {*}  {string}
     * @memberof MainService
     */
    _parseObject(object: any): string {
        return Object.keys(object).map(
            k => object[k] ? `${encodeURIComponent(k)}=${encodeURIComponent(object[k])}` : `${encodeURIComponent(k)}=`
        ).join('&');
    }
}
