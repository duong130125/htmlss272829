let intArray = [2, 1, 3, 4, 7, 5, 9, 8, 6, 10];
let evenArray = [];
let oddArray = [];
for(let i=1; i<= intArray.length; i++){
    if (i%2==0) {
        evenArray.push(i);
    }
    if(i%2!=0){
        oddArray.push(i);
    }
}
console.log("Mảng chứa các số chẵn: ",evenArray);
console.log("Mảng chữa các số lẻ: ",oddArray);