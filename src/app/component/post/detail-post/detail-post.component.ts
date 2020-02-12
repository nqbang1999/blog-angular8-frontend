import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../model/post';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../service/post/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {

  postId: any;



  @Input() post: Post;


  constructor(
              private token: TokenStorageService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private postService: PostService) {
      this.activatedRoute.params.subscribe(params => {
      this.postId = params.id;
  }); }

  ngOnInit() {
    this.getPostById();
  }

  getPostById() {
    this.postService.getPostById(this.postId).subscribe(
      result => {
        this.post = result;
        console.log(this.post);
        console.log('Get post success');
      }, error => {
        console.log('Fail get post');
      }
    );
  }

}
