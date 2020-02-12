import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../../model/post';
import {PostService} from '../../../service/post/post.service';
import {AdminService} from '../../admin-service/admin.service';

@Component({
  selector: 'app-list-post-manager',
  templateUrl: './list-post-manager.component.html',
  styleUrls: ['./list-post-manager.component.css']
})
export class ListPostManagerComponent implements OnInit {

  posts: Observable<Post[]>;

  id: any;


  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.posts = this.adminService.getAllPostsWithDateDESC();
  }

  deletePost(id: any) {
    this.adminService.deletePostById(id)
      .subscribe(
        data => {
          console.log(data);
          alert('delete post success');
          location.reload();
        },
        error => console.log(error)
      );
  }

}
