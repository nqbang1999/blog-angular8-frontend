import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../model/post';
import {Observable} from 'rxjs';
import {PostService} from '../../../../service/post/post.service';
import {TokenStorageService} from '../../../../_services/token-storage.service';

@Component({
  selector: 'app-list-private-post',
  templateUrl: './list-private-post.component.html',
  styleUrls: ['./list-private-post.component.css']
})
export class ListPrivatePostComponent implements OnInit {

  postId: any;

  id: any;

  posts: Observable<Post[]>;

  currentUser: any;



  constructor(private postService: PostService,
              private token: TokenStorageService,
  ) {}

  ngOnInit() {
    console.log(this.token.getUserId());
    this.currentUser = this.token.getUser();
    this.id = this.currentUser.id;
    this.reloadData();
  }

  reloadData() {
    this.posts = this.postService.getAllPostsByUserId(this.id);
  }


  deletePost(id: number) {
    this.postService.deletePost(id)
      .subscribe(
        data => {
          console.log(data);
          alert('delete success');
          location.reload();
        },
        error => console.log(error)
      );
  }

}
