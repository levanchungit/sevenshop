import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import styles from './styles';
type Props = {
  name: string;
  image: string;
  price: number;
  onPress: Function;
};

const ItemProductCategory = (props: Props) => {
  const { name, image, price, onPress } = props;
  return (
    <Pressable onPress={() => onPress()} style={styles.itemProductCategory}>
      <Image
        alt="fasbjh"
        style={styles.imageItemCategory}
        resizeMode="cover"
        source={{ uri: image ? image + '' : '123' }}
      />
      <View>
        <Text numberOfLines={1} style={{ fontSize: 20, marginBottom: 10 }}>
          {name}
        </Text>
        <View>
          <Text numberOfLines={1} fontWeight="bold" color="primary.600" style={{ fontSize: 20 }}>
            {price}đ
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ItemProductCategory;
