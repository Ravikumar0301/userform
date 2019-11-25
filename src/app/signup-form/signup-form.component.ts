import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  
  signupform: FormGroup;

  constructor(private fb_signup: FormBuilder) { }

  ngOnInit() {
    this.signupform = this.fb_signup.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      newusername: ['',Validators.required],
      newpassword: ['',Validators.required],
      confirmpassword: ['',Validators.required],
    })
  }
  get fr(){
    return this.signupform.controls;
  }
  
  onsave(){
    console.log("test")
  }

}
