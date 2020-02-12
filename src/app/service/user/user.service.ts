import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../model/post';
import {Observable} from 'rxjs';
import {PassForm} from '../../model/password-form';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {
  }

  changePassword(user: User, newPass: PassForm): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/update-password/${user.id}`, user);
  }

  getUserById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUserById/${id}`);
  }

}
