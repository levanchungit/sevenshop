import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import { IProductFavorites } from 'interfaces/Product';

type Props = {
  data: IProductFavorites;
};

const ItemFavoritesProduct = (props: Props) => {
  const { data } = props;
  return (
    <Pressable w={'50%'} h={'100%'}>
      <View w={'100%'} h={'auto'} borderRadius={1} mt={2} px={1}>
        <Image
          alt="Image OTP"
          w={'100%'}
          h={197}
          source={{
            uri: data.images[0],
          }}
        />
        <Text variant={'body1'}>{data.name}</Text>
        <Text
          variant={'body1'}
          color={'primary.600'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {data.price}đ
        </Text>
      </View>
    </Pressable>
  );
};

export default ItemFavoritesProduct;
