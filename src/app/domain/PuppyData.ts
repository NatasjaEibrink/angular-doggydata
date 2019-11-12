import {Dog} from './Dog';

export class PuppyData{

  id: number;
  weekNumber: number;
  weight: number;
  dog: Dog;

  constructor(weekNumber: number, weight: number, dog: Dog) {
    this.weekNumber = weekNumber;
    this.weight = weight;
    this.dog = dog;
  }

}
