import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import { IProduct } from 'interfaces/Product';
import { formatNumberCurrencyVN } from 'utils/common';
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
          alt="Invalid image"
          h={100}
          w={100}
          resizeMode="cover"
          source={{ uri: data.images[0] }}
        />
        <View>
          <Text
            style={{
              fontVariant: ['lining-nums'],
            }}
            variant="body1"
            numberOfLines={2}
          >
            {data.name}
          </Text>

          <View style={styles.coverTextPrice}>
            {data.price_sale ? (
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                variant="caption"
                strikeThrough
              >
                {formatNumberCurrencyVN(data.price)}
              </Text>
            ) : null}
            <Text
              style={{
                fontVariant: ['lining-nums'],
              }}
              color="primary.600"
              variant="subtitle1"
            >
              {data.price_sale
                ? formatNumberCurrencyVN(data.price_sale)
                : formatNumberCurrencyVN(data.price)}
            </Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

export default ItemProductFlashSale;
