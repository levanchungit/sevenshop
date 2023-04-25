import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Pressable, FlatList } from 'native-base';
import { useTranslation } from 'react-i18next';
import ItemProductMyPurchases from 'components/ItemProductMyPurchases';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetOrders from 'hook/order/useGetOrders';
import { IMyPurchases } from 'interfaces/Order';
import { AppNavigationProp } from 'providers/navigation/types';

const MyPurchaseScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();

  const [itemSelected, setItemSelected] = useState([
    {
      _id: '1',
      title: 'To Pay',
      isSelected: true,
      status: 'pending',
    },
    {
      _id: '2',
      title: 'To Ship',
      isSelected: false,
      status: 'verified',
    },
    {
      _id: '3',
      title: 'To Receive',
      isSelected: false,
      status: 'shipping',
    },
    {
      _id: '4',
      title: 'Completed',
      isSelected: false,
      status: 'completed',
    },
    {
      _id: '5',
      title: 'Cancel',
      isSelected: false,
      status: 'cancelled',
    },
  ]);
  const [idOrders, setIdOrders]: any = useState('pending');
  const { orders } = useGetOrders();

  const RenderItemProductMyPurchases = ({ data }: { data: IMyPurchases }) => (
    <ItemProductMyPurchases
      total={data.total_price}
      quantitiesProduct={data.products.length}
      name={data.products[0].product_id !== null ? data.products[0].product_id.name : 'Product'}
      image={
        data.products[0].product_id !== null
          ? data.products[0].product_id.images[0]
          : 'https://youlookfab.com/upload/products/fa2cbebc3781bd50eb4dee391f3eddfb921-mini.jpg'
      }
      onPressViewDetail={() => navigation.navigate('OrderDetail', { id_order: data._id })}
      onPressBuyAgain={() => navigation.navigate('Cart')}
    />
  );

  const renderItemOrder = ({ item }: any) => {
    return (
      <Pressable
        w={105}
        marginX={3}
        h={12}
        p={2}
        alignItems="center"
        justifyContent={'center'}
        onPress={() => {
          const itemSelected2 = itemSelected.map((prevItem) =>
            prevItem._id === item._id
              ? { ...prevItem, isSelected: true }
              : { ...prevItem, isSelected: false }
          );
          setItemSelected(itemSelected2);
          itemSelected2.map((item) => {
            if (item.isSelected) {
              setIdOrders(item.status);
            }
          });
        }}
        style={{ borderBottomColor: item.isSelected ? '#AC1506' : 'black' }}
        borderBottomWidth={item.isSelected ? 2 : 0}
        key={item._id}
      >
        <Text
          color={item.isSelected ? '#AC1506' : 'black'}
          textAlign="center"
          variant={'Body1'}
          fontSize={16}
          mb={item.isSelected ? 1 : 0}
          fontFamily={'Raleway_500Medium'}
        >
          {item.title}
        </Text>
      </Pressable>
    );
  };

  return (
    <View flex={1} pt={3} backgroundColor="white">
      <View style={{ marginTop: 20 }}>
        <View>
          <SSHeaderNavigation
            tabHeaderSearchEnabled={false}
            titleHeaderSearchEnabled={false}
            iconSearchEnabled={false}
            iconOther={false}
            titleHeaderSearch={''}
            titleHeaderScreen={t('MyPurchases.title')}
            iconRightHeaderScreen={false}
            iconRightHeaderCart={false}
          />
        </View>

        <FlatList
          paddingX={3}
          mt={3}
          mr={3}
          showsHorizontalScrollIndicator={false}
          h={55}
          horizontal
          data={itemSelected}
          renderItem={renderItemOrder}
          keyExtractor={(item, index) => index + ''}
        />
        {orders ? (
          <FlatList
            mt={1}
            data={
              orders
                ? orders?.data.results.filter(
                    (item: { status: string }) => item.status === idOrders
                  )
                : null
            }
            renderItem={({ item }: any) => <RenderItemProductMyPurchases data={item} />}
            keyExtractor={(item, index) => index + ''}
            marginBottom={110}
            showsVerticalScrollIndicator={false}
            bounces={false}
            onEndReachedThreshold={2}
          />
        ) : (
          <View display={'flex'} flexDirection={'column'}>
            <ItemProductMyPurchases
              total={0}
              quantitiesProduct={0}
              name={''}
              image={''}
              onPressViewDetail={() => null}
              onPressBuyAgain={() => null}
            />
            <ItemProductMyPurchases
              total={0}
              quantitiesProduct={0}
              name={''}
              image={''}
              onPressViewDetail={() => null}
              onPressBuyAgain={() => null}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default MyPurchaseScreen;
