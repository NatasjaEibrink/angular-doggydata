import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterLitterService} from '../../services/register-litter.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Litter} from '../../domain/Litter';

@Component({
  selector: 'app-register-litter',
  templateUrl: './register-litter.component.html',
  styleUrls: ['./register-litter.component.css']
})
export class RegisterLitterComponent implements OnInit {

  litter: Litter;

  registrationForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private registerLitterService: RegisterLitterService ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      pedigreeNameOfMother: new FormControl(),
      pedigreeNameOfFather: new FormControl(),
      birthDateOfLitter: new FormControl()
    });
  }

  onSubmit() {
    this.registerLitterService.registerLitter(this.litter)
      .subscribe(status => console.log(JSON.stringify(status)));
  }
}
