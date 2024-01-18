function demSoKyTu(chuoi) {
    const soKyTu = chuoi.replace(/\s/g, '').length;
    return soKyTu;
}
const chuoiKhaiBao = "Cách tốt nhất để khởi đầu là ngừng nói và bắt đầu làm";
const ketQua = demSoKyTu(chuoiKhaiBao);
console.log(`Chuỗi "${chuoiKhaiBao}" có ${ketQua} ký tự.`);
