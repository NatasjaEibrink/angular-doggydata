import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterLitterService} from '../../services/litters/register-litter.service';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {Litter} from '../../domain/Litter';
import {Dog} from '../../domain/Dog';

//custom data field
interface puppyDataFields{
  pedigreeName: string;
  sex: 'Reu'|'Teef';
}

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
      puppies: new FormArray([new FormGroup(
        {
          pedigreeName: new FormControl(),
          sex: new FormControl()
        }
      )]),
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
      newControls.push(new FormGroup(
        {pedigreeName: new FormControl(), sex: new FormControl()}
      ));
    }
    this.registrationForm.setControl('puppies', new FormArray(newControls));
  }

  onSubmit() {
    const pedigreeNameOfMother = this.registrationForm.get('pedigreeNameOfMother').value;
    const pedigreeNameOfFather = this.registrationForm.get('pedigreeNameOfFather').value;
    const birthDateOfLitter = this.registrationForm.get('birthDateOfLitter').value;
    const puppyData: puppyDataFields[] = this.registrationForm.get('puppies').value;
    const pupsOfLitter: Dog[] = [];
    console.log(puppyData);
    puppyData.forEach(formGroup => {
      const name = formGroup.pedigreeName;
      const sex = formGroup.sex;
      pupsOfLitter.push(new Dog(name, birthDateOfLitter, sex, null));
    });
    const litter = new Litter(pedigreeNameOfMother, pedigreeNameOfFather, birthDateOfLitter, pupsOfLitter );
    this.registerLitterService.registerLitter(litter)
      .subscribe(status => {
        console.log(this.router);
        this.router.navigate(['/litters']);
      });
  }
}
