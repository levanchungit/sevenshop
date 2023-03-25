//create function format number currency viet nam
export function formatNumberCurrencyVN(number: number) {
  return number.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}
