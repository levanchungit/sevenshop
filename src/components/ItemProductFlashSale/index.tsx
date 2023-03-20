import React from 'react';
import { Text, View, Image, Pressable, Skeleton } from 'native-base';
import { IProduct } from 'interfaces/Product';
import styles from './styles';

type Props = {
  data: IProduct;
  onPress: Function;
};

const ItemProductFlashSale = (props: Props) => {
  const { data, onPress } = props;
  return (
    <>
<<<<<<< HEAD
      <Pressable style={styles.itemProductFlastSale} onPress={() => onPress()}>
        <Skeleton h={20} isLoaded={!!data.images[0]}>
          <Image alt="1241" height={20} resizeMode="cover" source={{ uri: data.images[0] }} />
        </Skeleton>
=======
      <Pressable style={styles.itemProductFlashSale} onPress={() => onPress()}>
        <Image
          alt="1241"
          height={20}
          resizeMode="cover"
          source={
            data.images === undefined || data.images.length === 0
              ? require('../../assets/images/logo_sevenshop_image_default.png')
              : require('../../assets/images/logo_sevenshop_image_default.png')
            // { uri: data.images[0] }
          }
        />
>>>>>>> 2220bcd (update api home screen and the components flatlist not finished)
        <View>
          <Skeleton borderRadius={5} my={0.5} h={5} isLoaded={!!data.name}>
            <Text numberOfLines={1}>{data.name}</Text>
          </Skeleton>

          <View style={styles.coverTextPrice}>
            <Skeleton borderRadius={5} my={0.5} h={5} isLoaded={!!data.price}>
              <Text fontSize={14} textDecorationLine="line-through">
                {data.price}đ
              </Text>
            </Skeleton>
            <Skeleton borderRadius={5} my={0.5} h={5} isLoaded={!data.price_sale}>
              <Text color="primary.600" fontSize={16}>
                {data.price_sale}đ
              </Text>
            </Skeleton>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ItemProductFlashSale;
