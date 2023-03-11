import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';

type Props = {
  name: string;
  image: string;
  price: number;
  size_color: string;
  quantity: number;
};

const ItemProductCheckout = (props: Props) => {
  const { name, image, price, size_color, quantity } = props;
  return (
    <View w={'100%'}>
      <Pressable flexDirection={'row'} style={{ paddingHorizontal: 12 }} alignItems={'center'}>
        <Image
          alt="gsgsdg"
          style={{ width: 120, height: 120, borderRadius: 12 }}
          resizeMode="cover"
          source={{ uri: image ? image + '' : '123' }}
        />
        <View flexDirection={'column'} justifyContent={'space-between'} w="65%">
          <Text numberOfLines={1} fontSize={16} color="black" variant={'Body1'}>
            {name}
          </Text>
          <Text numberOfLines={1} fontSize={16} color="black" variant={'Body2'}>
            {size_color}
          </Text>
          <View flexDirection={'row'} justifyContent="space-between" alignItems={'center'}>
            <Text
              color="primary.600"
              fontSize={16}
              variant={'Button'}
              fontFamily="Raleway_500Medium"
            >
              {price}đ
            </Text>
            <Text color="black" fontSize={16} variant={'Subtitle2'} fontWeight="semibold">
              x{quantity}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemProductCheckout;
