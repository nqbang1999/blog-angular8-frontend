import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../model/post';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../../service/post/post.service';

@Component({
  selector: 'app-update-private-post',
  templateUrl: './update-private-post.component.html',
  styleUrls: ['./update-private-post.component.css']
})
export class UpdatePrivatePostComponent implements OnInit {

  post: Post;

  updatePostForm: FormGroup;


  constructor(private postService: PostService,
              private route: Router,
              private routes: ActivatedRoute) {
    this.updatePostForm = new FormGroup ({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.postService.getPostById(id).subscribe(
        data => {
          this.post = data;
        },
        error => {
          this.post = null;
        }
      );
    });
  }


  updatePost() {
    console.log(this.post);
    this.postService.updatePost(this.post).subscribe(next => {
      alert('edit success');
      this.route.navigate(['/getAllPrivatePosts']);
      console.log(next);
    }, error => {
      console.log(error),
        alert('edit not success');
    });
  }

}
