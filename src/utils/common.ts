import moment from 'moment';

//create function format number currency viet nam
export function formatNumberCurrencyVN(number: number) {
  return number.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
}

export function formatDate(date: string) {
  return moment(date).format('DD/MM/YYYY');
}
