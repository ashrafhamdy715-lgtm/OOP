// ----------------- Class ----------------
// class is a factory of object

// --------------------------------------------------------------

// revasion on class

class Human {
  public firstName: string = "";
  public lastName: string = "";
  public age: number = 0;
  public salary: number = 0;
  public gender: boolean = true;

  public study(): void {
    console.log("ok");
  }

  public play(): number {
    console.log("ok");
    return 8;
  }

  public constructor(name: string, age: number) {
    this.lastName = name;
    this.setAge(age);
  }

  private _name: string = "";

  //   setter
  public set name(userName: string) {
    this._name = userName;
  }

  public get name() {
    return this._name;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(age: number) {
    if (age >= 18) {
      this.age = age;
    } else {
      console.log("Error");
    }
  }
}

// revasion on object

let body1 = new Human("ahmed", 23);
body1.firstName = "Hamdy";
console.log(body1.getAge());

body1.name = "Hamdy";
console.log(body1.name);

// ---------------------------------------------------------------

class Student {
  // Properties
  public name: string = ""; // Accessor Specifier or Accessor Modifier  [public, private, protected]
  private age: number = 0;
  private email: string = "";

  // Methods
  public study(): void {
    console.log("ok");
  }

  // constractor
  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log("done");
  }

  public setAge(age: number): void {
    if (age >= 18) {
      this.age = age;
    } else {
      console.log("Error");
    }
  }

  public getAge() {
    return this.age;
  }
}

// ----------------- Object ----------------
let student1 = new Student("Hamdy", 20);
student1.name = "Hamdy";
student1.study();

student1.setAge(10);
console.log(student1.getAge());

let student2 = new Student("Ahmed", 30);

class User {
  private name: string = "";
  private age: number = 0;

  //   Setter
  public set user1(username: string) {
    if (true) {
      this.name = username;
    } else {
      console.log("Error");
    }
  }

  //   Getter
  public get user1() {
    return this.name;
  }
}

let obj = new User();

obj.user1 = "Hamdy";

console.log(obj.user1);

class Person {
  public static name: string = "";
  public age: number = 5;

  public fun1(): void {
    console.log(this.age); // this in normal => is a pointer to object
  }

  public static fun2(): void {
    console.log(this.name); // this in static => is a pointer to class
    console.log(this);
  }
}

Person.name = "Hamdy";
Person.fun2();

// ----------------------------------
class Human2 {
  private constructor(
    private name: string,
    private age: number,
    private role: string,
  ) {}

  public static createCleint(name: string, age: number): Human2 {
    return new Human2(name, age, "Client");
  }
}

console.log(Human2.createCleint("Hamdy", 23));

class Parent {
  public name: string = "";
  public age: number = 5;

  public constructor(name: string, age: number) {}
}

class Child extends Parent {
  public salary: number;
  public constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
    this.age = age;
  }
}

let inh = new Child("hamdy", 20, 2000);

console.log(inh.age);


