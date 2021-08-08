export const priceAfterDiscount = (price, discount) => {
    const discountAmt = price * (discount/100);
    return Math.floor(price - discountAmt);
}