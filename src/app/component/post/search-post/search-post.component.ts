import { Component, OnInit } from '@angular/core';
import {Post} from '../../../model/post';
import {PostService} from '../../../service/post/post.service';

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.css']
})
export class SearchPostComponent implements OnInit {

  title: '';
  posts: Post[];


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.title = '';
  }

  private searchPostsByTitleContaining() {
    this.posts = [];
    this.postService.searchPostByTitle(this.title)
      .subscribe(posts => this.posts = posts);
  }

  onSubmit() {
    this.searchPostsByTitleContaining();
  }

}
