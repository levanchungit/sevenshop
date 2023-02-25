import React from 'react';
import { View, Text } from 'native-base';
import * as Icon from 'react-native-feather';

type Props = object;

const NavHeader = (props: Props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
      <Icon.MapPin stroke={'black'} width={24} height={24} />
      <Text variant={'title'} style={{ marginLeft: 12 }}>
        Checkout
      </Text>
    </View>
  );
};

export default NavHeader;
