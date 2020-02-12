import { Component, OnInit } from '@angular/core';
import {Post} from '../../../model/post';
import {Observable} from 'rxjs';
import {PostService} from '../../../service/post/post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  posts: Observable<Post[]>;


  constructor(private postService: PostService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.posts = this.postService.getAllPostsWithDateDESC();
  }

}
