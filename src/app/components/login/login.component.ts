import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {
    console.log('constructor ------------>>>>>');
   }

  ngOnInit() {
  }

  onClickLoginButton() {
    this.router.navigate(['/dashboard']);
  }
  loginFunc(value) {
    console.log(value)
    this.router.navigate(['/dashboard']);
  }
}
