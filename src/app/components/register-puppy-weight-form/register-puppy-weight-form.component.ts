import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-register-puppy-weight-form',
  templateUrl: './register-puppy-weight-form.component.html',
  styleUrls: ['./register-puppy-weight-form.component.css']
})
export class RegisterPuppyWeightFormComponent implements OnInit {

  @Input()
  dogId;

  constructor() { }

  ngOnInit() {
  }

}
