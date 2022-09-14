// class Person {
//     constructor(firstName, lastName, gender, age){
//         this.__firstName = firstName;
//         this.__lastName = lastName;
//         this.__gender = gender;
//         this.__age = age;
//     }
//     __firstName;
//     __lastName;
//     __gender;
//     __age;
  
//     get age() {
//       return this.__age;
//     }
//     set age(age) {
//       this.__age = age;
//     }
//     get gender() {
//       return this.__gender;
//     }
//     set gender(gen) {
//       this.__gender = gen;
//     }
  
//     get lastName() {
//       return this.__lastName;
//     }
//     set lastName(lastName) {
//       this.__lastName = lastName;
//     }
//     get firstName() {
//         return this.__firstName;
//       }
//       set firstName(firstName) {
//         this.__firstName = firstName;
//       }
  
//     toString() {
//       return `The persons full name is ${this.__firstName} ${this.__lastName}`;
//     }
//   }
  
//   class Student extends Person {
//     constructor (year,fee,...args){
//     super()
//     this.__year = year;
//     this.__fee = fee;
//     this.__programs = args;
//     }

//     __year;
//     __fee;
//     __programs;
//     stat = {};
    
//       get year() {
//       return this.__year;
//     }
//     set year(year) {
//       this.__year = year;
//     }
//         get fee() {
//       return this.__fee;
//     }
//     set fee(fee) {
//       this.__fee = fee;
//     }
//           get programs() {
//       return this.__programs;
//     }
//     set programs(programs) {
//       this.__programs = programs;
//     }
//     passExam(program, grade){
//         this.stat[program] = grade;
//         this.programs.push(program)
//        if(Object.keys(this.stat).length >= 3 && !Object.values(gago.stat).filter(dis => dis < 50).length > 0) {
//            this.year ++;
           
//         }
//     }
    
//   }
  
//   class Staff extends Person {
//     constructor(programm, pay){
//         super();
//         this.__programm = programm;
//         this.__pay = pay;

//     }
//     __programm;
//     __pay;
    
//       get pay() {
//       return this.__pay;
//     }
//     set pay(pay) {
//       this.__pay = pay;
//     }
//        get programm() {
//       return this.__programm;
//     }
//     set programm(programm) {
//       this.__programm = programm;
//     }
    
//   }
  
  
//   let gago = new Student(2020, 140000);
//   gago.firstName = "Gago";
//   gago.lastName = "Bznuni";
//   gago.gender = "male";
//   gago.age = "85";
//   gago.passExam("Math", 55)
//   gago.passExam("Phisics", 55)
//   gago.passExam("Algebra", 55)


//   console.log(gago.toString())

//   console.log(gago)
 
  
let arr = [{
  id: 0,
  name: 'Armenia',
  parentId: null
}, {
  id: 1,
  name: 'Shirak',
  parentId: 0
}, {
  id: 2,
  name: 'Lori',
  parentId: 0
}, {
  id: 3,
  name: 'Tavush',
  parentId: 0
}, {
  id: 4,
  name: 'Syuniq',
  parentId: 0
}, {
  id: 5,
  name: 'Gyumri',
  parentId: 1
}, {
  id: 6,
  name: 'Vanadzor',
  parentId: 2
}, {
  id: 7,
  name: 'Ijevan',
  parentId: 3
}, {
  id: 8,
  name: 'Goris',
  parentId: 4
}, {
  id: 9,
  name: '58',
  parentId: 5
}, {
  id: 10,
  name: 'Dimac',
  parentId: 6
}, {
  id: 11,
  name: 'Rembaz',
  parentId: 7
}, {
  id: 12,
  name: 'Getapnya',
  parentId: 8
}];


// let root;
// arr.forEach((el) => {
//     if(el.parentId === null){
//         root = el;
//         return;
//     }
//     const parentEl = arr[el.parentId];
//     parentEl.children = [...(parentEl.children || []), el];
// });
// console.log(root)
// return root;
const arm = (items,id = null)=>
items.filter(item => item.parentId === id)
.map(i => ({...i,children:arm(arr,i.id)}));


console.log(arm(arr));