import { Component, OnInit } from '@angular/core';
import {Litter} from '../../domain/Litter';
import {RegisterLitterService} from '../../services/register-litter.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-litter-overview',
  templateUrl: './litter-overview.component.html',
  styleUrls: ['./litter-overview.component.css']
})
export class LitterOverviewComponent implements OnInit {

  litters: Litter[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private registerLitterService: RegisterLitterService ) { }

  ngOnInit() {}

  getLitters(): void {
    this.registerLitterService.getLitters().subscribe(litters => this.litters = litters);
  }

}
