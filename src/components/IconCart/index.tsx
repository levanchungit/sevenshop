import React from 'react';
import { View, Text, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';

type Props = {
  onPress: Function;
  quantityItems: string;
};

const IconCart = (props: Props) => {
  const { onPress, quantityItems } = props;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Pressable onPress={() => onPress()}>
        <Icon.ShoppingCart stroke="black" width={24} height={24} />
        <View
          backgroundColor="primary.600"
          height={7}
          width={7}
          justifyContent="center"
          alignItems="center"
          borderRadius={15}
          position="absolute"
          right={-15}
          top={-15}
        >
          <Text numberOfLines={1} fontSize={'lg'} color="white" lineHeight={17}>
            {quantityItems}
          </Text>
        </View>
      </Pressable>
      {/* <Text fontSize={'5xl'}>.</Text> */}
    </View>
  );
};

export default IconCart;
