import {HealthTest} from './HealthTest';

export class Dog {

  id: number;
  pedigreeName: string;
  sex: string;
  birthDate: Date;
  formattedBirthDate: string;

  constructor(pedigreeName: string ='', birthDate: Date = new Date(), sex: string = '', id: number= 0) {
    this.pedigreeName = pedigreeName;
    this.sex = sex;
    this.birthDate = birthDate;
    this.id = id;
  }
}
