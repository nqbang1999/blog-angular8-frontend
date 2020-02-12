import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  changePasswordForm: FormGroup;


  currentUser: any;

  constructor(private token: TokenStorageService,
              ) { }


  ngOnInit() {
    this.currentUser = this.token.getUser();
  }



}
