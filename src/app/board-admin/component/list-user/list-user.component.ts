import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../../../model/post';
import {User} from '../../../model/user';
import {PostService} from '../../../service/post/post.service';
import {UserService} from '../../../service/user/user.service';
import {AdminService} from '../../admin-service/admin.service';
import {TokenStorageService} from '../../../_services/token-storage.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: Observable<User[]>;

  id: any;







  constructor(private adminService: AdminService
             ) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.adminService.getAllUsers();
  }

  deleteUser(id: any) {
    this.adminService.deleteUserById(id)
      .subscribe(
        data => {
          console.log(data);
          alert('delete user success');
          location.reload();
        },
        error => console.log(error)
      );
  }


}
