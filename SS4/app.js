/**
 * Bài 1: Cho biến input là mảng bất kì.
 *  Hãy chuyển đổi kiểu dữ liệu của input sang chuỗi và gán cho biến result.

Ví dụ:

Input: [1, 2, 3] - Output: '1,2,3'string
Input: ['Javascript', 'PHP'] - Output: 'Javascript,PHP'
 */

function arrayToString(input) {
    let result;
    result = input.join(",");
    return result;
}


// let arr = [1,2,3];
// console.log(arrayToString(arr));




/**
 * Bài 2: Cho trước biến input là array bất kì.
 *  Hãy chuyển đổi kiểu dữ liệu biến input sang chuỗi,
 *  mỗi giá trị của các phần tử được cách nhau bằng dấu ' - ',
 *  gán giá trị sau chuyển đổi cho biến result.
Ví dụ:
Input: [1, 2, 3] - Output: '1 - 2 - 3'
Input: ['Chicken', 'Tiger', 'Monkey'] - Output: 'Chicken - Tiger - Monkey'
 */



/**
 * Bài 3: Cho biến anArray là mảng bất kì.
Nếu mảng có ít hơn 3 phần tử thì hãy xóa một phần tử đầu mảng đi
Nếu mảng có nhiều hơn 2 phần tử thì hãy xóa hai phần tử cuối mảng đi
Ví dụ:
Input: [10] - Output: []
Input: [6, 8] - Output: [8]
Input: [1, 2, 3, 4] - Output: [1, 2]

 */

function run(arr) {
    if (arr.length < 3) {
        arr.shift();
    }
    else {
        arr.pop();
        arr.pop();
    }
    return arr; // day la cai de console.log
}

// let arr = [1, 2, 3, 4];
// console.log(run(arr));


/**
 * Bài 4: Cho biến animals là mảng chứa tên các loài động vật.
 * Hãy thêm tên các loài động vật khác vào mảng animals tuân thủ theo các yêu cầu sau:
    Nếu mảng không có phần tử nào, hãy thêm hai phần tử Cat, Mouse vào mảng
    Nếu mảng có một phần tử, hãy thêm phần tử Elephant vào đầu mảng
    Nếu mảng có trên hai phần tử,
 hãy xóa phần tử thứ hai đi và thêm hai phần tử Monkey, Tiger vào vị trí đã xóa

 */

function Run(arr) {
    if (arr.length === 0) {
        arr.push('Cat', 'Mouse');
    }
    if (arr.length === 1) {
        arr.unshift('Elephant');
    }
    if (arr.length > 2) {
        arr.splice(1, 1, 'Monkey', 'Tiger');
    }
    // sau khi xet het dieu kien => tra ve mang arr sau khi them bot sua xoa
    return arr;
}

// let arr = []; // hien tai co 0 phan tu
// console.log(Run(arr));

/**
 * Bài 5: Một website nọ có chức năng tải thêm (load more) tại trang danh sách sản phẩm. Cứ mỗi khi người dùng kéo con lăn chuột xuống (scroll down) cuối danh sách sản phẩm là sẽ tải thêm 10 sản phẩm.
Diễn dải
Về mặt logic xử lý phía sau giao diện web, bài toán trên sẽ sử dụng kỹ thuật nối mảng. Thứ tự thực hiện các công việc thường diễn ra như sau:
Khi load trang web, tải sẵn một số lượng sản phẩm nhất định (mảng A)
Khi scroll down cuối danh sách, tải thêm một số lượng sản phẩm nhất định (mảng B)
Thực hiện nối mảng A và mảng B thành một mảng duy nhất sau đó hiển thị ra giao diện người dùng
Lúc này chúng ta chưa xây dựng website như bài toán trên nêu ra. Tuy nhiên logic chúng ta sử dụng để giải bài tập này chính là logic chúng ta sẽ sử dụng để giải bài toán thực tế trên trong tương lai.
Bài tập
Cho biến products và newProducts là hai mảng chứa danh sách các sản phẩm. Mảng products được sử dụng để hiển thị sản phẩm ra giao diện người dùng. Mảng newProducts là mảng mới được trả về từ máy chủ.
Yêu cầu: Hãy thực hiện nối mảng products và mảng newProducts với nhau và gán kết quả vào biến output.
Ví dụ:
Input: [], ['Sản phẩm 1'] - Output: ['Sản phẩm 1']
Input: ['Sản phẩm 1', 'Sản phẩm 2'], ['Sản phẩm 3'] - Output: ['Sản phẩm 1', 'Sản phẩm 2', 'Sản phẩm 3'];

 */

function joinTwoArrays(products, newProducts){
    let output;
    output = products.concat(newProducts);
    return output;
}



let sanPham = ['Sản phẩm 1', 'Sản phẩm 2'];
let sanPhamMoi = ['Sản phẩm 3'];
console.log(joinTwoArrays(sanPham,sanPhamMoi));