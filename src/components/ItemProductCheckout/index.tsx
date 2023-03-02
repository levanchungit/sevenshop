import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';

type Props = {
  name: string;
  image: string;
  price: number;
  size_color: string;
};

const ItemProductCheckout = (props: Props) => {
  const { name, image, price, size_color } = props;
  return (
    <Pressable flexDirection={'row'} style={{ padding: 12 }} alignItems={'center'}>
      <Image
        alt="gsgsdg"
        style={{ width: 120, height: 120, borderRadius: 12 }}
        resizeMode="cover"
        source={{ uri: image ? image + '' : '123' }}
      />
      <View flexDirection={'column'} justifyContent={'space-between'}>
        <Text numberOfLines={1} fontSize={16} color="black" variant={'Body1'}>
          {name}
        </Text>
        <Text numberOfLines={1} fontSize={16} color="black" variant={'Body2'}>
          {size_color}
        </Text>
        <View style={{}}>
          <Text color="primary.600" fontSize={16} variant={'Button'}>
            {price}đ
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemProductCheckout;
