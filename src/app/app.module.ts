import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
// import { RegiserComponent } from './regiser/regiser.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {CreatePostComponent} from './component/post/create-post/create-post.component';
import { DetailPostComponent } from './component/post/detail-post/detail-post.component';
import { ListPostComponent } from './component/post/list-post/list-post.component';
// import { PrivatePostComponent } from './component/post/private-post/private-post.component';
import { ListPrivatePostComponent } from './component/post/private-post/list-private-post/list-private-post.component';
import { UpdatePrivatePostComponent } from './component/post/private-post/update-private-post/update-private-post.component';
import { SearchPostComponent } from './component/post/search-post/search-post.component';
import { ChangePasswordComponent } from './component/user/change-password/change-password.component';
import { ListUserComponent } from './board-admin/component/list-user/list-user.component';
import { ListPostManagerComponent } from './board-admin/component/list-post-manager/list-post-manager.component';
// import { CreatePostComponent } from './component/create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CreatePostComponent,
    DetailPostComponent,
    ListPostComponent,
    // PrivatePostComponent,
    ListPrivatePostComponent,
    UpdatePrivatePostComponent,
    SearchPostComponent,
    ChangePasswordComponent,
    ListUserComponent,
    ListPostManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
