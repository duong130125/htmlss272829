function check(arr) {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > maxElement.length) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}

const stringArray = ["apple", "banana", "kiwi", "strawberry", "blueberry"];
const max = check(stringArray);
console.log("Phần tử có độ dài lớn nhất trong mảng là:", max);
