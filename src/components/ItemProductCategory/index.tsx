import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, Image, Pressable } from 'react-native';
import { formatNumberCurrencyVN } from 'utils/common';
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
      <LinearGradient colors={['#FFFFFF', '#FFFFFF00']} start={[0.9, 0.5]} style={{ opacity: 1 }}>
        <View style={styles.coverImage}>
          <Image
            style={styles.imageItemCategory}
            resizeMode="cover"
            source={{ uri: image ? image + '' : '123' }}
          />
        </View>
        <View>
          <Text numberOfLines={1} style={{ marginBottom: 8, fontSize: 20 }}>
            {name}
          </Text>
          <View>
            <Text numberOfLines={1} style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
              {formatNumberCurrencyVN(price)}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default ItemProductCategory;
