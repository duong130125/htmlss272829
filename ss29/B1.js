function check(so) {
    if (so % 2 === 0) {
        return "Số " + so + " là số chẵn.";
    } else {
        return "Số " + so + " là số lẻ.";
    }
}

let so1 = +prompt("Nhập vào số thứ nhất:");
let so2 = +prompt("Nhập vào số thứ hai:");
let so3 = +prompt("Nhập vào số thứ ba:");
console.log(check(so1));
console.log(check(so2));
console.log(check(so3));
