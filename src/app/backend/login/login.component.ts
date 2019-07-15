import { AuthentificationService } from './../authentification.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;

message="";
  constructor(private fb:FormBuilder,private auth:AuthentificationService, private router:Router ) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {

   this.auth.login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe((u) => {/* console.log(u); */  
        /* localStorage.setItem('currentUser', JSON.stringify(u)); */ 
        this.router.navigate(['main']);}, 
      ()  =>  {this.message='Erreur auth'} )

  }

createForm() {
this.loginForm = this.fb.group({

login:['admin', Validators.required],
password:['12345', Validators.required]

});
}
}
