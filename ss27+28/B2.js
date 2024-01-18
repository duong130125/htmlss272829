let a = parseInt(prompt("Nhập số nguyên a:"));
let b = parseInt(prompt("Nhập số nguyên b:"));
if (a > b) {
    [a, b] = [b, a];
}
let intArray = [];
for (let i = a+1; i < b; i++) {
    intArray.push(i);
}
console.log("Mảng chứa tất cả các số trong khoảng giữa", a, "đến", b + ":",intArray);
