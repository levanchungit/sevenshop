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
      <Pressable style={styles.itemProductFlastSale} onPress={() => onPress()}>
        <Skeleton h={100} w={100} isLoaded={!!data.images[0]} mb={3}>
          <Image
            alt="Invalid image"
            h={100}
            w={100}
            resizeMode="cover"
            source={{ uri: data.images[0] }}
          />
        </Skeleton>
        <View>
          <Skeleton.Text lines={1} isLoaded={!!data.name}>
            <Text
              style={{
                fontVariant: ['lining-nums'],
              }}
              variant="body1"
              numberOfLines={2}
            >
              {data.name}
            </Text>
          </Skeleton.Text>

          <View style={styles.coverTextPrice}>
            <Skeleton.Text lines={1} w="50%" isLoaded={data.price_sale ? !!data.price_sale : true}>
              {data.price_sale ? (
                <Text
                  style={{
                    fontVariant: ['lining-nums'],
                  }}
                  variant="caption"
                  strikeThrough
                >
                  {data.price}vnđ
                </Text>
              ) : null}
            </Skeleton.Text>
            <Skeleton.Text lines={1} w="100%" isLoaded={!!data.price}>
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                color="primary.600"
                variant="subtitle1"
              >
                {data.price_sale ? data.price_sale : data.price}đ
              </Text>
            </Skeleton.Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ItemProductFlashSale;
