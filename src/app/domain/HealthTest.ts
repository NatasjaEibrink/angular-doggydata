import {Dog} from './Dog';

export class HealthTest{

  id: number;
  dateOfExamination: Date;
  patella: string;
  heupen: string;
  ogen: string;
  dog: Dog;

  constructor(dateOfExamination: Date, patella: string, heupen: string, ogen: string, dog: Dog) {
    this.dateOfExamination = dateOfExamination;
    this.patella = patella;
    this.heupen = heupen;
    this.ogen = ogen;
    this.dog = dog;
  }

}
