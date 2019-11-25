import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sigin-form',
  templateUrl: './sigin-form.component.html',
  styleUrls: ['./sigin-form.component.css']
})

export class SiginFormComponent implements OnInit {

  signinform: FormGroup;

  constructor(private fb: FormBuilder) { }
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
    console.log(this.signinform.value);
}

}
