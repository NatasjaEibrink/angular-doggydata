import {Component, Input, OnInit} from '@angular/core';
import {Litter} from '../../domain/Litter';
import {RegisterLitterService} from '../../services/litters/register-litter.service';
import {map} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register-puppy-weight',
  templateUrl: './register-puppy-weight.component.html',
  styleUrls: ['./register-puppy-weight.component.css']
})
export class RegisterPuppyWeightComponent implements OnInit {

  dogId;

  litters: Litter[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private registerLitterService: RegisterLitterService ) { }

  ngOnInit() {
    this.getLitters();
  }

  getLitters(): void {
    this.registerLitterService.getLitters().pipe(
      map(litters => litters.sort((b,a) =>
        new Date(b.birthDateOfLitter).getDate() - new Date(a.birthDateOfLitter).getDate()))
    ).subscribe(litters => this.litters = litters);
  }

  setId(dogId: number){
    this.dogId = dogId;
  }

  clearDogId = () => {
    this.dogId = undefined;
  }
}
