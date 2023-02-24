import React from 'react';
import { View } from 'native-base';
import NavHeader from 'components/NavHeader';

type Props = object;

const CheckoutScreen = (props: Props) => {
  return (
    <View style={{ marginTop: 20 }}>
      <NavHeader />
    </View>
  );
};

export default CheckoutScreen;
