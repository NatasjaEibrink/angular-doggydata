import {Dog} from './Dog';

export class Litter {
  id: number;
  pedigreeNameOfMother: string;
  pedigreeNameOfFather: string;
  birthDateOfLitter: Date;
  pupsOfLitter: Dog[];
}
