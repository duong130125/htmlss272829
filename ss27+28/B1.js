let intArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let max = intArray[0];
let min = intArray[0];

for (let i = 1; i < intArray.length; i++) {
    if (intArray[i] > max) {
        max = intArray[i];
    }
    if (intArray[i] < min) {
        min = intArray[i];
    }
}
console.log("Mảng số nguyên: ", intArray);
console.log("Phần tử lớn nhất: ", max);
console.log("Phần tử nhỏ nhất: ", min);
