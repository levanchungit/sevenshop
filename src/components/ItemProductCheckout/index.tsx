import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import { formatNumberCurrencyVN } from 'utils/common';

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
    <View>
      <Pressable flexDirection={'row'} style={{ padding: 12 }} alignItems={'center'}>
        <Image
          alt="gsgsdg"
          w={120}
          h={120}
          borderRadius={12}
          mr={3}
          resizeMode="cover"
          source={{ uri: image ? image + '' : '123' }}
        />
        <View flexDirection={'column'} justifyContent={'space-between'} w="65%">
          <Text
            numberOfLines={1}
            fontSize={16}
            color="black"
            variant={'Body1'}
            fontFamily="Raleway_700Bold"
          >
            {name}
          </Text>
          <Text
            style={{
              fontVariant: ['lining-nums'],
            }}
            numberOfLines={1}
            fontSize={16}
            color="black"
            variant={'Body2'}
            my={2.5}
          >
            {size_color}
          </Text>
          <View flexDirection={'row'} justifyContent="space-between" alignItems={'center'}>
            <Text
              style={{
                fontVariant: ['lining-nums'],
              }}
              color="primary.600"
              fontSize={16}
              variant={'Button'}
              fontFamily={'Raleway_500Medium'}
            >
              {formatNumberCurrencyVN(price)}
            </Text>
            <Text
              style={{
                fontVariant: ['lining-nums'],
              }}
              color="black"
              fontSize={14}
              variant={'Subtitle2'}
              fontFamily={'Raleway_500Medium'}
            >
              x{quantity}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemProductCheckout;
