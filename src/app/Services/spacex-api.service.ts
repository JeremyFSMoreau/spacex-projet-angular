import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LaunchEndpoints } from './LaunchEndpoints';

@Injectable({
  providedIn: 'root'
})
export class SpacexApiService {
  baseUrl = 'https://api.spacexdata.com/v2';

  constructor(private httpClient: HttpClient) { }

  // Company Info 
  getCompanyInfo(): Observable<CompanyInfo> {
    const endpoint = `${this.baseUrl}/info`;
    return this.httpClient.get<CompanyInfo>(endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Company history

  getCompanyHistory(): Observable<CompanyHistory> {
    const endpoint = `${this.baseUrl}/info/history`;
    return this.httpClient.get<CompanyHistory>(endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

    getRockets(): Observable<Rocket[]> {
        const endpoint = `${this.baseUrl}/rockets`;
        return this.httpClient.get<Rocket[]>(endpoint)
            .pipe(
                catchError(this.handleError)
            );
    }

    getRocket(id): Observable<Rocket> {
        const endpoint = `${this.baseUrl}/rockets/${id}`;
        return this.httpClient.get<Rocket>(endpoint)
            .pipe(
                catchError(this.handleError)
            );
    }

  // Launches

  GetMissions<T>(path: LaunchEndpoints, params: any = null): Observable<T> {
    const endpoint = `${this.baseUrl}/launches/${LaunchEndpoints[path]}`;
    let httpParams = new HttpParams();
    Object.keys(params).forEach(function (key) {
      httpParams = httpParams.append(key, params[key]);
    });
    return this.httpClient.get<T>(endpoint, { params: httpParams })
      .pipe(
        catchError(this.handleError)
      );
  }

  //Capsule Info

  getCapsuleInfo(): Observable<CapsuleInfo> {
    const endpoint = `${this.baseUrl}/capsules`;
    return this.httpClient.get<CapsuleInfo>(endpoint)
    .pipe(
      catchError(this.handleError)
    );
  }

  // Launchpad

  getLaunchpad<Launchpad>(): Observable<Launchpad> {
    const endpoint = `${this.baseUrl}/launchpads`;
    return this.httpClient.get<Launchpad>(endpoint)
      .pipe(
        catchError(this.handleError)
      );
  }

  getLaunchpadDetails(id): Observable<Launchpad> {
    const endpoint = `${this.baseUrl}/launchpads/${id}`;
    return this.httpClient.get<Launchpad>(endpoint)
        .pipe(
            catchError(this.handleError)
        );
}

  // Handlers
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}