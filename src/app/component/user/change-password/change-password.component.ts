import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TokenStorageService} from '../../../_services/token-storage.service';
import {UserService} from '../../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PassForm} from '../../../model/password-form';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  passwordForm: PassForm;


  currentUser: any;

  constructor(private token: TokenStorageService,
              private userService: UserService,
              private routes: ActivatedRoute,
              private route: Router,
  ) {
    this.changePasswordForm = new FormGroup ({
      password: new FormControl('', [Validators.required])
    });
  }


  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.userService.getUserById(id).subscribe(
        data => {
          this.currentUser = data;
        },
        error => {
          this.currentUser = null;
        }
      );
    });
    this.currentUser = this.token.getUser();
    console.log(this.currentUser);
  }


  changePassword() {
    console.log(this.currentUser);
    this.userService.changePassword(this.currentUser , this.passwordForm).subscribe(next => {
      alert('change pass success');
      this.route.navigate(['/profile']);
      console.log(next);
    }, error => {
      console.log(error),
        alert('change pass fail');
    });
  }


}
