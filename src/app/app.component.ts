import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';
import {Post} from './model/post';
import {PostService} from './service/post/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: '';
  posts: Post[];

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;


  constructor(private postService: PostService ,
              private tokenStorageService: TokenStorageService,
              private router: Router) { }

  private searchPostsByTitleContaining() {
    this.posts = [];
    this.postService.searchPostByTitle(this.title)
      .subscribe(posts => this.posts = posts);
  }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.title = '';


    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }


  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

  onSubmit() {
    this.searchPostsByTitleContaining();
    // this.router.navigate(['/getAllPostsByTitleContaining']);
  }

}
