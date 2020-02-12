import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/userManager/getAllUsers` );
  }


  deleteUserById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/userManager/deleteUserById/${id}`);
  }


  getAllPostsWithDateDESC(): Observable<any> {
    return this.http.get(`${this.baseUrl}/postManager/getAllPostsByDate/DESC` );
  }

  getPostById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/postManager/getPostById/${id}`);
  }


  deletePostById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/postManger/deletePostById/${id}`);
  }


}
