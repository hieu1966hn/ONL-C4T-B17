// let menu = [];

// // Create
// menu.push("my tom");

// //Read
// console.log("menu", menu);

//update: doi my tom => thit cho [splice]
// let numberUpdate = Number(prompt('nhap vao vi tri muon update phan tu'));
// 0
// menu.splice(0, 1, "thit cho");
// console.log("menu sau khi su dung splice", menu);

// thay doi pho ga => "thit cho";

// menu.splice(1, 1, "thit cho");


//Delete
/**
 * xoa phan tu dau mang menu: menu.shift()
 * xoa phan tu cuoi mang menu: menu.pop();
 * xoa phan tu o giua mang menu: menu.splice(vi tri bat dau, so phan tu muon xoa);
 * 
 */


/**BT: CRUD: 1 nhà hàng đang kiến tạo menu ( menu là 1 mảng chứa các món ăn trong đó)
 * Khi người dùng nhập C: => hiện thanh nhập (prompt) để thêm món ăn vào mảng menu
 * Khi người dùng nhập R: => in ra toàn bộ món ăn trong mảng menu
 * Khi người dùng nhập U: => cho người dùng nhập món muốn thay đổi, và nhập vào tên món VD: trong mảng có "my tom", 
 * người dùng nhập món muốn thay đổi "my tom" = > "món người dùng nhập"
 * Khi người dùng nhập D: => cho người dùng nhập tên món muốn xóa, và xóa nó trong mảng menu
 */


// khai bao bien a: chua menu cua nha hang
let a = [];

function c() {
    a.push(prompt("Hãy thêm 1 món bạn muốn vào menu: "));
}

function r() {
    console.log(a.join(","));
}

function u() {
    let b = prompt("hãy điền tên món ăn bạn muốn thay thế");
    if (a.indexOf(b) < 0) { // indexOf(hàm tìm trong mảng)
        alert("Không tìm thấy món ăn bạn muốn")
    }
    else {
        let c = prompt("Hãy điền tên món bạn muốn thay thế");
        a.splice(a.indexOf(b), 1, c);
    }
}

function d() {
    let d = prompt("Nhập vào tên món bạn muốn xóa");
    if (a.indexOf(d) < 0) {
        alert("Không tìm thấy phần tử muốn xóa")
    }
    else {
        a.splice(a.indexOf(d) - 1, 1); // tạm để
    }
}


for (let i = 0; ; i++) {
    let e = prompt("Hãy điền hành động bạn muốn với menu nhà hàng \n C,R,U,D ").toLowerCase();
    if (e == 'c') {
        c();
    }
    else if (e == 'r') {
        r();
    }
    else if (e == 'u') {
        u();
    }
    else if (e == 'd') {
        d();
    }
    else {
        break;
    }
}



