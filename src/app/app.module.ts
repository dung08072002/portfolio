import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { ProjectComponent } from './pages/project/project.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListPostComponent } from './pages/admin/post/list-post/list-post.component';
import { FormPostComponent } from './pages/admin/post/form-post/form-post.component';
import { ListProjectComponent } from './pages/admin/project/list-project/list-project.component';
import { FormProjectComponent } from './pages/admin/project/form-project/form-project.component';
import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    ProjectComponent,
    SigninComponent,
    SignupComponent,
    ListPostComponent,
    FormPostComponent,
    ListProjectComponent,
    FormProjectComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
