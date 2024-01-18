function appearance(chuoi, kyTu) {
    let appear = 0;
    
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            appear++;
        }
    }

    return appear;
}
const chuoiNhap = prompt("Nhập vào một chuỗi:");
const kyTuNhap = prompt("Nhập vào một ký tự:");
const result = appearance(chuoiNhap, kyTuNhap);
console.log(`Số lần xuất hiện của ký tự "${kyTuNhap}" trong chuỗi là: ${result}`);
