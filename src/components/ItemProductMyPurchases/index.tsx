import React from 'react';
import { Text, View, Pressable, FlatList } from 'native-base';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import { ItemProduct } from '../../screens/MyPurchaseScreen';

type Props = {
  dataProduct: ItemProduct[];
  total: number;
  quantitiesProduct: number;
};

const ItemProductMyPurchases = (props: Props) => {
  const { dataProduct, total, quantitiesProduct } = props;

  const RenderItemProduct = ({ item }: { item: ItemProduct }) => {
    return (
      <ItemProductCheckout
        name={item.name}
        image={item.image}
        price={item.price}
        size_color={item.size_color}
        quantity={item.quantity}
      />
    );
  };

  return (
    <View width={'100%'} p={3} borderBottomColor={'gray.500'} borderBottomWidth={1}>
      <Pressable flexDirection={'column'}>
        <FlatList
          w={'100%'}
          borderBottomColor={'gray.500'}
          borderBottomWidth={1}
          borderStyle="dashed"
          data={dataProduct}
          renderItem={({ item }) => <RenderItemProduct item={item} />}
        />
        <View
          flexDirection={'row'}
          borderBottomColor={'gray.500'}
          borderBottomWidth={1}
          borderStyle="dashed"
          justifyContent="space-between"
          alignItems={'center'}
          paddingY={3}
          paddingX={4}
        >
          <Text variant={'Body1'} fontSize={14} fontFamily="Raleway_500Medium">
            {quantitiesProduct} products
          </Text>
          <View flexDirection={'row'} alignItems="center">
            <Text variant={'Title'} fontSize={20} fontFamily="Raleway_700Bold">
              Total:{' '}
            </Text>
            <Text variant={'Title'} fontSize={24} fontFamily="Raleway_700Bold" color="primary.600">
              {total}đ
            </Text>
          </View>
        </View>
        <View flexDirection={'row'} paddingX={4} pt={4}>
          <Icons.Truck stroke="black" fontSize={24} />
          <Text ml={4} variant="Body2" fontSize={14} fontFamily="Raleway_500Medium">
            Đơn hàng đang được giao đến bạn
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ItemProductMyPurchases;
