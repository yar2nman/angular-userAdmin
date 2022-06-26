import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, finalize } from 'rxjs/operators';
// import { Globals } from './globals';
import { Observable, noop, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterModel } from '../model';

@Injectable({
    providedIn: 'root'
  })
export class AuthinticationService {
    token: any;
    private headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    constructor(private http: HttpClient) { }



    login(username: string, password: string): Observable<boolean> {

        const urlSearchParams = new URLSearchParams();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        urlSearchParams.append('grant_type', 'password');

        urlSearchParams.append('client_id', 'Angular2SPA');
        const body = urlSearchParams.toString();

         return this.http.post('https://scid.ahqparts.com/connect/token', body, { headers: this.headers })
            .pipe(
                map((response: any) => {
                // login successful if there's a jwt token in the response
                const token = response.access_token;
                const rtoken = response.refresh_token;
                if (response.status = 200) {
                    // set token property
                    this.token = token;

                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    localStorage.setItem('mtoken', token);
                    localStorage.setItem('refresh', rtoken);
                    localStorage.setItem('muserinfo', JSON.stringify(this.getDataFromToken(token)));
                    // this.globals.userinfo.next(this.getDataFromToken(token));
                    // this.globals.updatedd();

                    return true;
                } else {
                    return false;
                }
            })
            );
    }

    private getDataFromToken(token: any): any {
        let data;
        if (typeof token !== 'undefined') {
            const encoded = token.split('.')[1];
            data = JSON.parse(this.urlBase64Decode(encoded));
        }

        return data;
    }

    private urlBase64Decode(str: string) {
        let output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw new Error('Illegal base64url string!');
        }

        return window.atob(output);
    }



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('mtoken');
        // localStorage.removeItem('refresh');
        localStorage.removeItem('muserinfo');
        // localStorage.clear();
        // localStorage.clear();
        // this.globals.userinfo.next(null);
    }

    register(registerModel: RegisterModel): Observable<any> {
        return of('error')
    }

}
