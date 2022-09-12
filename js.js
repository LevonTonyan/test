class Person {
  constructor(firstName, lastName, gender, age) {
    this.__firstName = firstName;
    this.__lastName = lastName;
    this.__gender = gender;
    this.__age = age;
  }
  __firstName;
  __lastName;
  __gender;
  __age;

  get age() {
    return this.__age;
  }
  set age(age) {
    this.__age = age;
  }
  get gender() {
    return this.__gender;
  }
  set gender(gen) {
    this.__gender = gen;
  }

  get lastName() {
    return this.__lastName;
  }
  set lastName(lastName) {
    this.__lastName = lastName;
  }
  get firstName() {
    return this.__firstName;
  }
  set firstName(firstName) {
    this.__firstName = firstName;
  }

  toString() {
    return `The persons full name is ${this.__firstName} ${this.__lastName}`;
  }
}

class Student extends Person {
  constructor(year, fee, ...args) {
    super()
    this.__year = year;
    this.__fee = fee;
    this.__programs = args;
  }

  __year;
  __fee;
  __programs;
  stat = {};

  get year() {
    return this.__year;
  }
  set year(year) {
    this.__year = year;
  }
  get fee() {
    return this.__fee;
  }
  set fee(fee) {
    this.__fee = fee;
  }
  get programs() {
    return this.__programs;
  }
  set programs(programs) {
    this.__programs = programs;
  }
  passExam(program, grade) {
    this.stat[program] = grade;
    this.programs.push(program)
    if (Object.keys(this.stat).length >= 3 && !Object.values(gago.stat).filter(dis => dis < 50).length > 0) {
      this.year++;

    }
  }

}

class Staff extends Person {
  constructor(programm, pay, firstName, lastName, gender, age) {
    super(firstName, lastName, gender, age);
    this.__programm = programm;
    this.__pay = pay;

  }
  __programm;
  __pay;

  get pay() {
    return this.__pay;
  }
  set pay(pay) {
    this.__pay = pay;
  }
  get programm() {
    return this.__programm;
  }
  set programm(programm) {
    this.__programm = programm;
  }

}

let mard = new Person("Rshtuni", "Gugo", "male", 50)
let gago = new Student(2020, 140000);
let dasatu = new Staff("Sycology", 500000, "Harutyunyan", "Galina", "female", 37)

