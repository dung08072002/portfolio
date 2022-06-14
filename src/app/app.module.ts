import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
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
import { ClientComponent } from './pages/client/client.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './pages/admin/admin-layout/admin-layout.component';
import { NavAdminComponent } from './components/adminLayout/nav-admin/nav-admin.component';
import { SidebarAdminComponent } from './components/adminLayout/sidebar-admin/sidebar-admin.component';
import { FormsModule } from '@angular/forms';

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
    ListUserComponent,
    ClientComponent,
    DashboardComponent,
    AdminLayoutComponent,
    NavAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
