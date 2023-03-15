import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import { IProduct } from 'interfaces/Products';
import styles from './styles';

type Props = {
  data: IProduct;
  onPress: Function;
};

const ItemProductFlashSale = (props: Props) => {
  const { data, onPress } = props;
  return (
    <>
      <Pressable style={styles.itemProductFlastSale} onPress={() => onPress()}>
        <Image
          alt="1241"
          height={20}
          resizeMode="cover"
          source={
            data.images[0] === undefined
              ? require('../../assets/images/logo_sevenshop_image_default.png')
              : { uri: data.images[0] }
          }
        />
        <View>
          <Text numberOfLines={1}>{data.name}</Text>

          <View style={styles.coverTextPrice}>
            <Text fontSize={14} textDecorationLine="line-through">
              {data.price}đ
            </Text>
            <Text color="primary.600" fontSize={16}>
              {data.price_sale}đ
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ItemProductFlashSale;
