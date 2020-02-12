import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = 'http://localhost:8080/api/post';

  constructor(private http: HttpClient) {
  }

  createPost(post: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/createPost`, post);
  }


  getAllPosts(): Observable<any> {
    return this.http.get(`this.baseUrl/getAllPosts`);
  }


  getPostById(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/getPostBy/${id}`);
  }


  updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/updatePost/${post.id}`, post);
  }


  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletePost/${id}`);
  }


  getAllPostsWithDateDESC(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllPostsByDate/DESC` );
  }


  searchPostByTitle(title): Observable<any> {
    return this.http.get(`${this.baseUrl}/searchPostByTitle/${title}`);
  }

  getAllPostsByUserId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getAllPostsByUserId/${id}`);
  }




}
