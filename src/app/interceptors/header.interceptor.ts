import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('HTTP - Interceptor')

    const token = 'fgkjhasdkjfklajsdhkfja';
    const headers = new HttpHeaders({
      Accept: 'application/json',
      HeaderPersonalizado: 'Hola mundo desde el interceptor',
      Authorization: `Bearer: ${token}`
    });

    const reqClone = request.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    console.warn(error);
    return throwError(() => 'Error en el servidor');
  }
}
