import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Post} from '../../../model/post';
import {PostService} from '../../../service/post/post.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  createPostForm: FormGroup;

  post: Partial<Post>;



  constructor(private router: Router,
              private service: PostService) {
    this.createPostForm = new FormGroup({
      title: new FormControl(''),
      content: new FormControl(''),
      date: new FormControl(''),
    });
    this.post = {
      title: '',
      content: '',
      date: '',
    };
  }

  ngOnInit() {
  }

  createPost() {
    this.service.createPost(this.post).subscribe(() => {
        alert('create post success');
        this.router.navigate(['/getAllPostsOrderByDate']);
      }, error => {
        console.log(error),
          alert('create failed !!');
      }
    );
  }





}
