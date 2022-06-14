import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {
    username: "",
    email: "",
    password: "",
  }

  constructor(
    private router: Router,
    private activateroute: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.signUp(this.user).subscribe(data => {
      this.router.navigate(['/signin'])
    })
  }
}
