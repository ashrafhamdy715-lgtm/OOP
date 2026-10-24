"use strict";
// ----------------- Class ----------------
// class is a factory of object
// --------------------------------------------------------------
// revasion on class
class Human {
    firstName = "";
    lastName = "";
    age = 0;
    salary = 0;
    gender = true;
    study() {
        console.log("ok");
    }
    play() {
        console.log("ok");
        return 8;
    }
    constructor(name, age) {
        this.lastName = name;
        this.setAge(age);
    }
    _name = "";
    //   setter
    set name(userName) {
        this._name = userName;
    }
    get name() {
        return this._name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        if (age >= 18) {
            this.age = age;
        }
        else {
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
    name = ""; // Accessor Specifier or Accessor Modifier  [public, private, protected]
    age = 0;
    email = "";
    // Methods
    study() {
        console.log("ok");
    }
    // constractor
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("done");
    }
    setAge(age) {
        if (age >= 18) {
            this.age = age;
        }
        else {
            console.log("Error");
        }
    }
    getAge() {
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
    name = "";
    age = 0;
    //   Setter
    set user1(username) {
        if (true) {
            this.name = username;
        }
        else {
            console.log("Error");
        }
    }
    //   Getter
    get user1() {
        return this.name;
    }
}
let obj = new User();
obj.user1 = "Hamdy";
console.log(obj.user1);
class Person {
    static name = "";
    age = 5;
    fun1() {
        console.log(this.age); // this in normal => is a pointer to object
    }
    static fun2() {
        console.log(this.name); // this in static => is a pointer to class
        console.log(this);
    }
}
Person.name = "Hamdy";
Person.fun2();
// ----------------------------------
class Human2 {
    name;
    age;
    role;
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role = role;
    }
    static createCleint(name, age) {
        return new Human2(name, age, "Client");
    }
}
console.log(Human2.createCleint("Hamdy", 23));
class Parent {
    name = "";
    age = 5;
    constructor(name, age) { }
}

// Inharetance
class Child extends Parent {
    salary;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.age = age;
    }
}
let inh = new Child("hamdy", 20, 2000);
console.log(inh.age);
//# sourceMappingURL=index.js.map