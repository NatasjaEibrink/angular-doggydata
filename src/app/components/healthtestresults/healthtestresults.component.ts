import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {HealthTest} from '../../domain/HealthTest';
import {ActivatedRoute, Router} from '@angular/router';
import {HealthTestService} from '../../services/healthTest/health-test.service';
import {Dog} from '../../domain/Dog';

@Component({
  selector: 'app-healthtestresults',
  templateUrl: './healthtestresults.component.html',
  styleUrls: ['./healthtestresults.component.css']
})
export class HealthtestresultsComponent implements OnInit {

  registrationForm: FormGroup;
  healthTests: HealthTest[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private healthTestService: HealthTestService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      dateOfExamination: new FormControl(),
      patella: new FormControl(),
      heupen: new FormControl(),
      ogen: new FormControl(),
    });
    this.getDogHealthTestResults();
  }

  getDogHealthTestResults(): void {
    const dogId = this.route.snapshot.params.id;
    this.healthTestService.getDogHealthTestResults(dogId).subscribe(healthTestResults => {
      this.healthTests = healthTestResults;
      console.log(healthTestResults);
    });
  }

  onSubmit() {
    const dateOfExamination = this.registrationForm.get('dateOfExamination').value;
    const patella = this.registrationForm.get('patella').value;
    const heupen = this.registrationForm.get('heupen').value;
    const ogen = this.registrationForm.get('ogen').value;
    const dogId = this.route.snapshot.params.id;
    this.healthTestService.registerHealthTest(dogId, {heupen, ogen, patella, dateOfExamination})
      .subscribe(status => {
        this.getDogHealthTestResults();
      });
  }

}
