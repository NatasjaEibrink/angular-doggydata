import { Component, OnInit } from '@angular/core';
import {Litter} from '../../domain/Litter';
import {RegisterLitterService} from '../../services/litters/register-litter.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-litter-overview',
  templateUrl: './litter-overview.component.html',
  styleUrls: ['./litter-overview.component.css']
})
export class LitterOverviewComponent implements OnInit {

  litters: Litter[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private registerLitterService: RegisterLitterService ) { }

  ngOnInit() {
    this.getLitters();
  }

  getLitters(): void {
    this.registerLitterService.getLitters().pipe(
      map(litters => litters.sort((a,b) =>
        new Date(a.birthDateOfLitter).getDate() - new Date(b.birthDateOfLitter).getDate()))
    ).subscribe(litters => this.litters = litters);
  }

}
