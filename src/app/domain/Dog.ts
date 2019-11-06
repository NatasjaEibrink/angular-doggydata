export class Dog {

  id: number;
  pedigreeName: string;
  sex: string;
  birthDate: Date
  formattedBirthDate: string;

  constructor(pedigreeName: string, birthDate: Date) {
    this.pedigreeName = pedigreeName;
    this.birthDate = birthDate;

  }

}
