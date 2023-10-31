let VN = new Intl.NumberFormat('vi-vn');

function formatCurrency(currency) {
    return VN.format(currency);
}

export default formatCurrency;
