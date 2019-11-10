import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DogDetailsService} from '../../services/dog-details/dog-details.service';
import {Dog} from '../../domain/Dog';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  dog: Dog;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dogDetailsService: DogDetailsService) { }

  ngOnInit() {
    this.getDogDetails();
  }

  getDogDetails(): void {
    const dogId = this.route.snapshot.params.id;
    this.dogDetailsService.getDogDetails(dogId).subscribe(dog => this.dog = dog);
  }
}
