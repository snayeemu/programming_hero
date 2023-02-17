function applyDiscount() {
    const price = parseFloat(document.getElementById('price').innerText);
    const newPrice = (price * 70) / 100;
    document.getElementById('price').innerText = newPrice;
}

document.getElementById('btn-apply').addEventListener('click', function () {
    const inputCoupon = document.getElementById('input-coupon').value;
    if (inputCoupon == 'DISC30') {
        applyDiscount();
    }
    else
        alert('Incorrect coupon!!!');
})