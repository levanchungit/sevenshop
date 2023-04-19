import React, { createContext, useState } from 'react';
import { PAYMENT_TYPE } from 'global/constants';
import { AddressCheckout } from 'interfaces/Checkout';
import { IVoucher } from 'interfaces/Voucher';

type CheckoutContextValue = {
  paymentType: PAYMENT_TYPE;
  setPaymentType: (type: PAYMENT_TYPE) => void;
  addresses: AddressCheckout;
  setAddress: (type: AddressCheckout) => void;
  selectVoucher: IVoucher;
  setSelectVoucher: (type: IVoucher) => void;
};

const defaultCheckoutContextValue: CheckoutContextValue = {
  paymentType: PAYMENT_TYPE.cod,
  setPaymentType: () => {},
  addresses: {
    address: '',
    full_name: '',
    phone: '',
    _id: '',
    default_address: false,
  },
  setAddress: () => {},
  selectVoucher: {
    name: '',
    code: '',
    type: '',
    value: 0,
    start_date: '',
    end_date: '',
    _id: '',
  },
  setSelectVoucher: () => {},
};

export const CheckoutContext = createContext<CheckoutContextValue>(defaultCheckoutContextValue);

export const CheckoutProvider = ({ children }: any) => {
  const [paymentType, setPaymentType] = useState<PAYMENT_TYPE>(PAYMENT_TYPE.cod);
  const [addresses, setAddress] = useState<AddressCheckout>({} as AddressCheckout);
  const [selectVoucher, setSelectVoucher] = useState<IVoucher>({} as IVoucher);

  return (
    <CheckoutContext.Provider
      value={{
        paymentType,
        setPaymentType,
        addresses,
        setAddress,
        selectVoucher,
        setSelectVoucher,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
