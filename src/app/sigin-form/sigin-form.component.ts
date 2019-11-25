import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sigin-form',
  templateUrl: './sigin-form.component.html',
  styleUrls: ['./sigin-form.component.css']
})

export class SiginFormComponent implements OnInit {
  studentform: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
    this.studentform = this.fb.group({
      firstName: ['', Validators.required]
    });
  }
  get firstName() { return this.studentform.get('firstName'); }
onSubmit(){
    console.log(this.studentform.value);
}
}
