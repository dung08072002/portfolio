import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './pages/admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { FormPostComponent } from './pages/admin/post/form-post/form-post.component';
import { ListPostComponent } from './pages/admin/post/list-post/list-post.component';
import { FormProjectComponent } from './pages/admin/project/form-project/form-project.component';
import { ListProjectComponent } from './pages/admin/project/list-project/list-project.component';
import { ListUserComponent } from './pages/admin/user/list-user/list-user.component';
import { ClientComponent } from './pages/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { ProjectComponent } from './pages/project/project.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path: "signin", component: SigninComponent },
  { path: "signup", component: SignupComponent },
  {
    path: "", component: ClientComponent, children: [
      { path: "", redirectTo: 'home', pathMatch: 'full' },
      { path: "home", component: HomeComponent },
      { path: "post", component: PostComponent },
      { path: "project", component: ProjectComponent },
    ]
  },
  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
      { path: "dashboard", component: DashboardComponent },
      { path: "user", component: ListUserComponent },
      {
        path: "post", children: [
          { path: "", redirectTo: 'list', pathMatch: 'full' },
          { path: "list", component: ListPostComponent },
          { path: "add", component: FormPostComponent },
        ]
      },
      {
        path: "project", children: [
          { path: "", redirectTo: 'list', pathMatch: 'full' },
          { path: "list", component: ListProjectComponent },
          { path: "add", component: FormProjectComponent },
          { path: "edit/:id", component: FormProjectComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
