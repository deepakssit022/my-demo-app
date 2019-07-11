import { Component, OnInit } from '@angular/core';
import { MyDemoService } from '../../services/my-demo.services';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myDemoService: MyDemoService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
}
