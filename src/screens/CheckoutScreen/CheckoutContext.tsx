import React, { createContext, useState } from 'react';
import { PAYMENT_TYPE } from 'global/constants';

type CheckoutContextValue = {
  paymentType: PAYMENT_TYPE;
  setPaymentType: (type: PAYMENT_TYPE) => void;
};

const defaultCheckoutContextValue: CheckoutContextValue = {
  paymentType: PAYMENT_TYPE.cod,
  setPaymentType: () => {},
};

export const CheckoutContext = createContext<CheckoutContextValue>(defaultCheckoutContextValue);

export const CheckoutProvider = ({ children }: any) => {
  const [paymentType, setPaymentType] = useState<PAYMENT_TYPE>(PAYMENT_TYPE.cod);

  // const onSetPaymentType = (type: PAYMENT_TYPE) => {
  //   setPaymentType(type);
  // };
  return (
    <CheckoutContext.Provider value={{ paymentType, setPaymentType }}>
      {children}
    </CheckoutContext.Provider>
  );
};
