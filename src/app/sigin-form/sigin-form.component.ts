import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-sigin-form',
  templateUrl: './sigin-form.component.html',
  styleUrls: ['./sigin-form.component.css']
})

export class SiginFormComponent implements OnInit {

  signinform: FormGroup;
  loading = true;
  login = true;

  constructor(private fb: FormBuilder, private logservice: LoginService) { }

  ngOnInit() {
    this.signinform = this.fb.group({
      username: ['', Validators.required],
      password: ['',Validators.required]
    });
  }

get f(){
  return this.signinform.controls;
}

onSubmit(){
    this.login=true;
    if(this.signinform.invalid){
      return;
    }

    this.logservice.login(this.signinform.value).subscribe(data => {
      if(data['message']=='ok' && data['result'].length < 0){
        console.log("valid",data);
      }
      else{
        this.loading = false;
        console.log("Invalid")
      }
    })
    
}

}
