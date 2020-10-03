import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

const DEFAULT_HEADERS = new HttpHeaders({
  accept: 'application/json',
});

@Injectable()
export class AppHttpClient {
  private api = environment.api_url;

  public constructor(public http: HttpClient) {
  }

  public get<T>(endPoint: string, params: any): Observable<T> {
    return this.http.get<T>(`${this.api}${endPoint}`, {
      headers: DEFAULT_HEADERS,
      observe: 'response',
      params: params
    }).pipe(map(responsePipe));
  }

  public post<T>(endPoint: string, params: any,): Observable<T> {
    return this.http.post<T>(`${this.api}${endPoint}`, params, {
      headers: DEFAULT_HEADERS,
      observe: 'response'
    }).pipe(map(responsePipe));
  }

  public delete<T>(endPoint: string, params: any): Observable<T> {
    return this.http.delete<T>(`${this.api}${endPoint}`, {
      headers: DEFAULT_HEADERS,
      observe: 'response',
      params: params
    }).pipe(map(responsePipe));
  }
}

function responsePipe(res: IRequestOptions) {
  return res && res.body;
}

