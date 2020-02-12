import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private baseUrl = 'http://localhost:8080/api/response';


  constructor(private http: HttpClient) {
  }


  createResponse(response: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createResponse`, response);
  }

  getAllResponses(): Observable<any> {
    return this.http.get(`this.baseUrl/listAllResponses`);
  }


  getAllResponsesByIdPost(id: any): Observable<any> {
    return this.http.get(`this.baseUrl/listResponsesByIdPost/${id}`);
  }







}
