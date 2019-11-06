import {Dog} from './Dog';

export class Litter {
  id: number;
  pedigreeNameOfMother: string;
  pedigreeNameOfFather: string;
  birthDateOfLitter: Date;
  pupsOfLitter: Dog[] = [];

  constructor(pedigreeNameOfMother: string, pedigreeNameOfFather: string, birthDateOfLitter: Date, pupsOfLitter: Dog[] ) {
    this.pedigreeNameOfMother = pedigreeNameOfMother;
    this.pedigreeNameOfFather = pedigreeNameOfFather;
    this.birthDateOfLitter = birthDateOfLitter;
    this.pupsOfLitter = pupsOfLitter;
  }
}
