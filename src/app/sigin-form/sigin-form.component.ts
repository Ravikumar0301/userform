import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sigin-form',
  templateUrl: './sigin-form.component.html',
  styleUrls: ['./sigin-form.component.css']
})

export class SiginFormComponent implements OnInit {
  studentform = new FormGroup ({
      firstname: new FormControl('Enter first name here'),
      lastname: new FormControl('Enter last name here'),
  })
  constructor() { }

  ngOnInit() {
  }

}
