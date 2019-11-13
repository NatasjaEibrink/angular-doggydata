import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PuppyData} from '../../domain/PuppyData';
import {ActivatedRoute, Router} from '@angular/router';
import {PuppyDataService} from '../../services/puppyData/puppy-data.service';

@Component({
  selector: 'app-register-puppy-weight-form',
  templateUrl: './register-puppy-weight-form.component.html',
  styleUrls: ['./register-puppy-weight-form.component.css']
})
export class RegisterPuppyWeightFormComponent implements OnInit {

  registrationForm: FormGroup;

  @Input()
  dogId;

  @Input()
  afterSave: () => void;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private puppyDataService: PuppyDataService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      weekNumber: new FormControl(),
      weight: new FormControl(),
    });
  }

  onSubmit() {
    const weekNumber = this.registrationForm.get('weekNumber').value;
    const weight = this.registrationForm.get('weight').value;
    const dogId = this.dogId;
    this.puppyDataService.registerPuppyWeight(dogId, {weekNumber,weight})
      .subscribe(status => {
        this.afterSave();
      });
  }

}
