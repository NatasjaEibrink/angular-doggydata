import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterLitterService} from '../../services/register-litter.service';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Litter} from '../../domain/Litter';

@Component({
  selector: 'app-register-litter',
  templateUrl: './register-litter.component.html',
  styleUrls: ['./register-litter.component.css']
})
export class RegisterLitterComponent implements OnInit {

  registrationForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private registerLitterService: RegisterLitterService ) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      puppies: new FormArray([]),
      pedigreeNameOfMother: new FormControl(),
      pedigreeNameOfFather: new FormControl(),
      birthDateOfLitter: new FormControl(),
      aantalPups: new FormControl(),
    });
  }

  onChange() {
    const aantalPups = this.registrationForm.get('aantalPups').value;
    const newControls = [];
    for ( let i = 0; i < aantalPups; i++ ) {
      newControls.push(new FormControl(''));
    }
    this.registrationForm.setControl('puppies', new FormArray(newControls));
  }

  onSubmit() {
    const pedigreeNameOfMother = this.registrationForm.get('pedigreeNameOfMother').value;
    const pedigreeNameOfFather = this.registrationForm.get('pedigreeNameOfFather').value;
    const birthDateOfLitter = this.registrationForm.get('birthDateOfLitter').value;
    const litter = new Litter(pedigreeNameOfMother, pedigreeNameOfFather, birthDateOfLitter);
    this.registerLitterService.registerLitter(litter)
      .subscribe(status => {
        console.log(this.router);
        this.router.navigate(['/litters']);
      });
  }
}
