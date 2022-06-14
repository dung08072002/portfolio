import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  userSignIn: any = {
    email: "",
    password: "",
  }
  constructor(
    private userService: UserService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signIn(this.userSignIn).subscribe(data => {
      console.log(data)
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(['/home'])
      }
    })
  }

}
