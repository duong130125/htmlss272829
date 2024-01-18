let element = [3, 5, 2, 7, 4, 2, 8, 7, 1, 3];
let unique = null;
for (let i = 0; i < element.length; i++) {
    let current = element[i];
    if (element.indexOf(current) === element.lastIndexOf(current)) {
        unique = current;
        break;
    }
}
if (unique !== null) {
    console.log("Phần tử đầu tiên là độc nhất trong mảng:", unique);
} else {
    console.log("Không có phần tử nào là độc nhất trong mảng.");
}
