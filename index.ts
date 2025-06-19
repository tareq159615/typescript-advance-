// type Person = {
//     name: string;
// }
// const person : Person = {
//     name : "Tareq Aziz",
// }
// console.log(person.name);

// ----------------------------

// let num:number = 103223423232;
// num+=2;
// console.log(num)

// ----------------------------

// const double = (x:number, y:number) => x * y
// const res = double(2,10);
// console.log(res);

// ----------------------------

// function user(person = "Tareq Aziz"){
//     return `Hello ${person}`;
// }
// const res = user();
// console.log(res);

// ----------------------------

// const items : string[] = [];

// items.push("boy");
// items.push("girl");
// items.push("book");

// console.log(items);

// ----------------------------

// type User = {
//     name : string;
//     age : number;
//     location : string;
// }

// const printUserData = (user : User) => {
//     return `Name: ${user.name} Age : ${user.age} Location: ${user.location}`
// }
// const res = printUserData({name:"tareq",age:23,location:"Dhaka"})
// console.log(res);

// ----------------------------
// type User = {
//     name : string;
//     age : number;
// }

// function printUserData(user : User) {
//     console.log( `Name: ${user.name} Age : ${user.age}`);
// }
// const myData:User = ({name:"Tareq",age:23})
// printUserData(myData);

// ----------------------------
// type User = {
//     name : string;
//     age? : number;
// }

// function printUserData(user : User) {
//     console.log( `Name: ${user.name} Age : ${user.age}`);
// }
// const myData:User = ({name:"Tareq"})
// printUserData(myData);

// ----------------------------
// const PrintStrE
// ----------------------------
// function uniqueDataTypesnc<Type>(
//   item: Type,
//   defaultValue: Type
// ): [Type, Type] {
//     return [item, defaultValue];
// }
// const any = uniqueDataTypesnc<any>("Tareq",20)
// console.log(any);
// const str = uniqueDataTypesnc<string>("Hello","World");
// console.log(str)
// const num = uniqueDataTypesnc<number>(12,22);
// console.log(num)
// const bool = uniqueDataTypesnc<boolean>(false,true);
// console.log(bool)
// ------------------Generic function----------

// function getRandomkeyValuePair<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: T;
// } {
//   const keys = Object.keys(obj);
//   const randKey = keys[Math.floor(Math.random() * keys.length)];
//   return { key: randKey, value: obj[randKey] };
// }
// const stringObject = { a: "Apple", b: "banana", c : "cherry" };
// const res = getRandomkeyValuePair<string>(stringObject);
// console.log(res);

// ----------------------------

// function filterArray<T>(array: T[], condition: (item: T) => boolean): T[] {
//   return array.filter((item) => condition(item));
// }
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumber = filterArray<number>(numberArray, (num) => num % 2 === 0);
// console.log(evenNumber);

// const stringArray = ["Tareq", "Aziz", "Don", "Jon"];
// const bigName = filterArray<string>(stringArray, (st) => st.length > 3);
// console.log(bigName);

// interface fruit {
//   name: string;
//   color: string;
// }

// const fruitArray: fruit[] = [
//   { name: "Apple", color: "Red" },
//   { name: "Banana", color: "Yello" },
//   { name: "Cherry", color: "Red" },
// ];

// const redArray = filterArray<fruit>(
//   fruitArray,
//   (fruit) => fruit.color === "Red"
// );
// console.log(redArray);

// ----------------------------
// class Box<T> {
//   private content: T;
//   constructor(initalContent: T) {
//     this.content = initalContent;
//   }
//   getContent(): T {
//     return this.content;
//   }
//   setContent(newContent: T): void {
//     this.content = newContent;
//   }
// }
// const stringBox = new Box<string>("Hello");
// console.log(stringBox.getContent());
// stringBox.setContent("New Content Added");
// console.log(stringBox.getContent());

// --------------Type Nerrowing--------------

// type MyType = string | number;
// function exampleFunction(value: MyType) : void{
//   if(typeof value === "string"){
//     console.log(value.toUpperCase());
//   }else{
//     console.log(value);
//   }
// }
// exampleFunction("hello");
// exampleFunction(20);

// --------------instanceof operator--------------
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  department: string;
  role?: string;
};

type ManagerWithEmployeeInfo = Employee & Manager;
const Manager: ManagerWithEmployeeInfo = {
  id: 123,
  name: "Jon",
  department: "Engineering",
  role: "Team Lead",
};
console.log(
  `Id : ${Manager.id} \nName : ${Manager.name}\nDepartment : ${Manager.department}\nRole : ${Manager.role}`
);