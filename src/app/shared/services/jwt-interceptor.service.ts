import { Injectable , Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root' ,
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) {}
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //  intercept(request , next ) {
    // add authorization header with jwt token if available

    if (request.headers.get('No-Auth') === 'True') {
            return next.handle(request.clone());
        }
    if (request.url.includes('i18n')) {
        return next.handle(request);
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {

        if (!currentUser.provider) {
            console.log('currentUser is not a social user ' );
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        } else {
            console.log('currentUser is a social user with provider: ' + currentUser.provider );
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.idToken}`
                }
            });
        }
    }


    return next.handle(request);
}

}
