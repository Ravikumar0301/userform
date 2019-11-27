import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})

export class SignupFormComponent implements OnInit {
  
  signupform: FormGroup;
  saveform: boolean;

  constructor(private fb_signup: FormBuilder,private signservice:SignupService) { }
  
  ngOnInit() {
    this.signupform = this.fb_signup.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      newusername: ['',Validators.required],
      newpassword: ['',Validators.required],
      confirmpassword: ['',Validators.required],
    },{
      validator: this.mustmatch()
    });
  }
  get fr(){
    return this.signupform.controls;
  }

  mustmatch(){
    return (fg: FormGroup) => {
        const new_password = fg.controls['newpassword'];
        const confirm_password = fg.controls['confirmpassword'];
        if (confirm_password.errors && !confirm_password.errors.mustmath){
          return; 
        }
        if (new_password.value !== confirm_password.value) {
          confirm_password.setErrors({mustmatch: true });
        } else {
          confirm_password.setErrors(null);
        }
    }
  }
  
  onsave(){
    this.saveform=true;
    if(this.signupform.invalid){
      return;
    }
    this.signservice.signup(this.signupform.value).subscribe(data =>{
        console.log (data)
    }
      )
  }

}
