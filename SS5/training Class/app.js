// // ten cac class viet hoa chu dau (ten la cum danh tu)
// // trong class co constructor (ham khoi tao) [moi class chi co 1 constructor, nhieu hon => error]

// class Cat {
//     constructor(name, age, address) {
//         this.name = name;
//         this.address = address;
//         this.age = age;
//     }
//     // neu class khong co thong tin, chi co hanh dong => ta co the bo qua constructor
//     speak() { // phuong thuc (hay goi la ham speak)
//         return this.name + ' pussy';
//     }
//     // neu co hanh dong dung chung su dung key word static
//     set color(c) {
//         this.eyeColor = c;
//     }
//     get catInfo() {
//         return this.name + ' and his age:' + this.age + ' and his address' + this.address;
//     }
//     static move() {
//         return 'Cat is moving';
//     }

// }

// let X = class Student {
//     constructor(name, address, fee, average) {
//         this.name = name;
//         this.address = address;
//         this.fee = fee;
//         this.average = average;
//     }
//     study(subject) {
//         return this.name + ' studies ' + subject;
//     }

// }
// // luu y, khai bao lop truoc khi tao doi tuong, nguoc lai => error
// class Fish {

// }
// let cat = new Cat('Tom', 3, 'HaNoi');
// let hieu = new X('Nguyen Trung Hieu', 'Ha Noi', 20, 3.25);
// // doi tuong duoc tao ra thong qua tu khoa "new";
// //=> lay thong tin doi tuong
// console.log(cat.catInfo);
// console.log(hieu.study('Math'));
// // luu y bieu thuc class, khai bao class
// console.log(Cat.move());
// console.log(cat.speak());
// // static: tien ich khong can phai tao doi tuong (new) ma van su dung duoc

// class Person {
//     constructor(name) {
//         console.log(name + ' Person constructor');

//     }

//     //phuong thuc thu 2
//     getId() {
//         return 10
//     }
// }

// // lop Employee ke thua tu Person: ke thua, dong goi, da hinh, ao hoa
// class Employee extends Person {
//     constructor(name) {
//         //de goi toi constructor cua Person su dung tu khoa super
//         super(name);
//         console.log(name + ' Employee constructor');
//     }
//     getId() {
//         return super.getId(); // ta co the truy cap duoc phuong thuc cua thang cha no 
//     }

// }

// let emp = new Employee('Tedu');
// console.log(emp.getId());


/// class trong Es6


// class Course {
//     // dinh nghia, khoi tao gia tri
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     getName() {
//         return this.name;
//     }

//     getPrice() {
//         return this.price;
//     }

// }

// const phpCourse = new Course('PHP', 1000);
// const jsCourse = new Course('Javascript', 20000);
// console.log(phpCourse);
// console.log(jsCourse);


/** what is class ???
 * 
 */

// const Nguoi = {
//     name: 'Hieu',
//     age: 18,
//     address: 'Ha Noi'
// }
// const Duong = {
//     name: 'Duong',
//     age: 14,
//     address: 'Viet Nam'
// }

// console.log(Nguoi);
// console.log(Duong);




/////// lap trinh huong doi tuong voi Javascript


// Luu y: cú pháp khai báo của class: đặt tên luôn viết hoa chữ cái đầu tiên  (quy ước)
// class Course {
//     //khoi tao doi tuong dau tien (phai co): trong 1 class, chi co duy nhat 1 constructor
//     constructor(name, price,something) {
//         this.name = name;
//         this.price = price;
//         this.something = something
//     }

//     // getFullNameCourse(){ // trong class thi goi la phuong thuc
//     //     return `Đây là khóa học ${this.name} với giá là ${this.price}`;
//     // }
//     getName() {
//         return this.name
//     }

//     getPrice() {
//         return this.price
//     }

// }

// const phpCourse = new Course('PHP', 1000, 'nothing');
// // const jsCourse = new Course('JS',2000)
// // console.log(phpCourse.getName()); // in ra gi ??: PHP
// // console.log(phpCourse.getPrice()); // in ra gi ??: PHP
// // // console.log(jsCourse);
// console.log(phpCourse);