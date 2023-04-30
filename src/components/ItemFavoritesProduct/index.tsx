import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import { IProductFavorites } from 'interfaces/Product';
import { formatNumberCurrencyVN } from 'utils/common';

type Props = {
  data: IProductFavorites;
  onPress: Function;
};

const ItemFavoritesProduct = (props: Props) => {
  const { data, onPress } = props;
  return (
    <Pressable w={'50%'} h={'100%'} onPress={() => onPress()}>
      <View w={'100%'} h={'auto'} borderRadius={1} mt={2} px={1}>
        <Image
          alt="Image OTP"
          w={'100%'}
          h={150}
          source={{
            uri: data.images[0],
          }}
        />
        <Text numberOfLines={1} variant={'body1'}>
          {data.name}
        </Text>
        <Text
          variant={'body1'}
          color={'primary.600'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {formatNumberCurrencyVN(data.price)}
        </Text>
      </View>
    </Pressable>
  );
};

export default ItemFavoritesProduct;
