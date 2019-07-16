import { Component, OnInit } from '@angular/core';
import { MyDemoService } from '../../services/my-demo.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { patternValidator } from '../../shared/pattern-validator';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showIncorrectLoginMsg: boolean = false;
  loginApiErrorMsg :any;
  
  constructor(private myDemoService: MyDemoService, private router: Router) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password: new FormControl('', Validators.required)
  })

  loginFunction() {
    this.myDemoService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(
      (results: any) => {
        console.log("result ---->", results);
        this.router.navigate(['/home']);
      },
      error => {
        console.log("error ---->", error.error.is_success);
        this.showIncorrectLoginMsg = true;
        this.loginApiErrorMsg= error.error.message;
      }
    )
  }
}
