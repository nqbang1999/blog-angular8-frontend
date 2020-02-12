import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {CreatePostComponent} from './component/post/create-post/create-post.component';
import {ListPostComponent} from './component/post/list-post/list-post.component';
import {DetailPostComponent} from './component/post/detail-post/detail-post.component';
import {ListPrivatePostComponent} from './component/post/private-post/list-private-post/list-private-post.component';
import {UpdatePrivatePostComponent} from './component/post/private-post/update-private-post/update-private-post.component';
import {SearchPostComponent} from './component/post/search-post/search-post.component';
import {ChangePasswordComponent} from './component/user/change-password/change-password.component';
import {ListUserComponent} from './board-admin/component/list-user/list-user.component';
import {ListPostManagerComponent} from './board-admin/component/list-post-manager/list-post-manager.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'createPost', component: CreatePostComponent},
  { path: 'getAllPostsOrderByDate', component: ListPostComponent},
  { path: 'getPostDetails/:id', component: DetailPostComponent},
  { path: 'getAllPrivatePosts', component: ListPrivatePostComponent},
  { path: 'updatePrivatePost/:id', component: UpdatePrivatePostComponent},
  { path: 'getAllPostsByTitleContaining', component: SearchPostComponent },
  { path: 'changePassword/:id', component: ChangePasswordComponent},
  { path: 'admin/getAllUsers', component: ListUserComponent},
  { path: 'admin/getAllPosts', component: ListPostManagerComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
