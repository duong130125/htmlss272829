let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray= [];
for (let i = 0; i < intArray.length; i++) {
    if (intArray[i] % 2 === 0) {
        newArray.push(intArray[i]);
    }
}
console.log("Mảng ban đầu:",intArray);
console.log("Mảng mới sau khi loại bỏ phần tử lẻ:",newArray);
