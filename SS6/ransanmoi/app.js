// let Name, age, address;
// Name = prompt('moi nguoi dung nhap ten');
// age = prompt("Moi nguoi dung nhap tuoi");
// address = prompt('moi nguoi dung nhap dia chi');
// class Nguoi{
//     constructor(name, age, address){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
//     getInfo(){
//         return `Name; ${this.name}\nage: ${this.age}\nAddress: ${this.address}`
//     }
// }
// // let hieu = new Nguoi();
// // hieu.name = Name;
// // hieu.age = age;
// // hieu.address = address;

// // console.log(hieu.getInfo());

// class giaoVien extends Nguoi{
//     constructor(name,age,address){
//         super(name,age, address);
//     }

// }
// let Vitas = new giaoVien('Vitas',18);
// console.log(Vitas.getInfo());


class Fish {
    constructor(habitat, length) {
        this.habitat = habitat
        this.length = length
    }

     renderProperties() {
        return this.habitat + " " + this.length;
    }
}

class Trout extends Fish {
    constructor(habitat, length, variety) {
        super(habitat, length);
        this.variety = variety;
    }

     renderPropertiesWithSuper() {
        return super.renderProperties() + ' this shit';
    }
}

let fish = new Fish('Lake', 1000);
// console.log(fish.renderProperties());
let trout = new Trout('This Trout living in a Bigger Lake', 2000, 'Bigfish');
// console.log(trout.renderPropertiesWithSuper());
console.log(trout.renderPropertiesWithSuper());