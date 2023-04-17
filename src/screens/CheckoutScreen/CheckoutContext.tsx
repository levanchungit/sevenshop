import React, { createContext, useState } from 'react';
import { PAYMENT_TYPE } from 'global/constants';
import { AddressCheckout } from 'interfaces/Checkout';

type CheckoutContextValue = {
  paymentType: PAYMENT_TYPE;
  setPaymentType: (type: PAYMENT_TYPE) => void;
  addresses: AddressCheckout;
  setAddress: (type: AddressCheckout) => void;
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
};

export const CheckoutContext = createContext<CheckoutContextValue>(defaultCheckoutContextValue);

export const CheckoutProvider = ({ children }: any) => {
  const [paymentType, setPaymentType] = useState<PAYMENT_TYPE>(PAYMENT_TYPE.cod);
  const [addresses, setAddress] = useState<AddressCheckout>({} as AddressCheckout);

  // const onSetPaymentType = (type: PAYMENT_TYPE) => {
  //   setPaymentType(type);
  // };
  return (
    <CheckoutContext.Provider value={{ paymentType, setPaymentType, addresses, setAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
};
