declare class Human {
    firstName: string;
    lastName: string;
    age: number;
    salary: number;
    gender: boolean;
    study(): void;
    play(): number;
    constructor(name: string, age: number);
    private _name;
    set name(userName: string);
    get name(): string;
    getAge(): number;
    setAge(age: number): void;
}
declare let body1: Human;
declare class Student {
    name: string;
    private age;
    private email;
    study(): void;
    constructor(name: string, age: number);
    setAge(age: number): void;
    getAge(): number;
}
declare let student1: Student;
declare let student2: Student;
declare class User {
    private name;
    private age;
    set user1(username: string);
    get user1(): string;
}
declare let obj: User;
declare class Person {
    static name: string;
    age: number;
    fun1(): void;
    static fun2(): void;
}
declare class Human2 {
    private name;
    private age;
    private role;
    private constructor();
    static createCleint(name: string, age: number): Human2;
}
declare class Parent {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare class Child extends Parent {
    salary: number;
    constructor(name: string, age: number, salary: number);
}
declare let inh: Child;
//# sourceMappingURL=index.d.ts.map