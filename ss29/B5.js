function locPhanTuChuaChuoi(mang, chuoi) {
    const ketQua = [];

    for (let i = 0; i < mang.length; i++) {
        if (mang[i].includes(chuoi)) {
            ketQua.push(mang[i]);
        }
    }

    return ketQua;
}
const mangChuoi = ["apple", "banana", "kiwi", "orange", "grape"];
const chuoiNhap = prompt("Nhập vào một chuỗi:");

const ketQua = locPhanTuChuaChuoi(mangChuoi, chuoiNhap);
console.log(`Các phần tử trong mảng chứa chuỗi "${chuoiNhap}":`, ketQua);
