import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        let clone: HttpRequest<any>;

        if (token) {
            clone = request.clone({
                setHeaders: {

                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(clone);
        } else {
            //No token; proceed request without bearer token
            console.log('No token added to HTTP request');
            return next.handle(request);
        }
       
    }
}