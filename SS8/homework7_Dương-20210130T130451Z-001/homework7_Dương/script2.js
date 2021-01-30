function fibonacci(n) {
  // hàm fibonacci đưa ra giá trị thứ n
  if (n == 0) {
    return n;
  } else if (n == 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


let numberOfNumbers = prompt("nhập vào số dãy số fibonacci để hiện thị ");
for (i = 0; i < numberOfNumbers; i++) {
  console.log(fibonacci(i));
}
