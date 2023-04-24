import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Skeleton } from 'native-base';
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
    <Skeleton isLoaded={!!image} height={301} width="46%" mx={3} borderRadius={3}>
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
            {/* <Skeleton isLoaded={!!name} height={21} width={'100%'} m={3}> */}
            <Text numberOfLines={1} style={{ marginBottom: 8, fontSize: 20 }}>
              {name}
            </Text>
            {/* </Skeleton> */}
            <View>
              {/* <Skeleton isLoaded={!!price} height={21} width={'100%'} mx={3}> */}
              <Text numberOfLines={1} style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>
                {formatNumberCurrencyVN(price)}
              </Text>
              {/* </Skeleton> */}
            </View>
          </View>
        </LinearGradient>
      </Pressable>
    </Skeleton>
  );
};

export default ItemProductCategory;
