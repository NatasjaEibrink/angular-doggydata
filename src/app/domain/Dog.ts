export class Dog {

  id: number;
  pedigreeName: string;
  sex: string;
  birthDate: Date
  formattedBirthDate: string;

  constructor(pedigreeName: string, birthDate: Date, sex: string) {
    this.pedigreeName = pedigreeName;
    this.sex = sex;
    this.birthDate = birthDate;
  }

}
