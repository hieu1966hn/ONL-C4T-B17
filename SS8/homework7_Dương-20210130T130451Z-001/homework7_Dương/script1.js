class Employee {
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        //   xong phần chuyển phương thức set
        this.address = address
    }
    // chuyển phương thức get
    getName(){
        return this.name;
    }
    getAge(){
        return this.age
    }
}

let me = new Employee("Duong",15,"Hà Nội")
// console.log(me.name);
// console.log(me.age);
// console.log(me.address);
console.log(me.getName());