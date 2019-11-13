import {Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import {Litter} from '../../domain/Litter';

@Component({
  selector: 'app-puppydata',
  templateUrl: './puppydata.component.html',
  styleUrls: ['./puppydata.component.css']
})
export class PuppydataComponent implements OnInit {

  litters: Litter[] = [];


  constructor() { }

  ngOnInit() {}

}
