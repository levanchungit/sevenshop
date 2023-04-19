import React from 'react';
import { FlatList, Text, View } from 'native-base';
// import { ScrollView, Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import SelectOptions from 'components/SelectOptions';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSItemFeeOrderDetail from 'components/SSItemFeeOrderDetail';
import useGetOrderById from 'hook/order/useGetOrderById';
import { OrderDetailRouteProp } from 'providers/navigation/types';
import { formatNumberCurrencyVN } from 'utils/common';

type orderDetail = {
  route: OrderDetailRouteProp;
};

const OrderDetailScreen = ({ route }: orderDetail) => {
  const { id_order } = route.params;
  const { order } = useGetOrderById(id_order);
  const { t } = useTranslation();

  console.log('order', order?.data.products);
  return (
    <View flex={1} pt={3} backgroundColor="white">
      <View mt={4}>
        <SSHeaderNavigation
          tabHeaderSearchEnabled={false}
          titleHeaderSearchEnabled={false}
          iconSearchEnabled={false}
          iconOther={false}
          titleHeaderSearch={''}
          titleHeaderScreen={t('OrderDetail.title')}
          iconRightHeaderScreen={true}
          quantityItems={0}
          iconRightHeaderCart={false}
          quantityHeaderCarts={0}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={undefined}
        renderItem={undefined}
        ListHeaderComponent={
          <View key={7}>
            <View backgroundColor={'#EDC5C1'} px={4} py={3} mt={1} key={1}>
              <Text
                mb={2.5}
                variant={'title'}
                fontSize={20}
                fontWeight="bold"
                fontFamily={'Raleway_700Bold'}
              >
                Packed
              </Text>
              <Text
                variant={'Subtitle1'}
                fontSize={16}
                fontWeight="semibold"
                fontFamily={'Raleway_500Medium'}
              >
                Your parcel is packed and will be handed over to our logistics partner
              </Text>
            </View>
            <View
              key={2}
              flexDirection={'row'}
              p={4}
              borderBottomWidth={0.5}
              borderBottomColor="gray.300"
            >
              <Icons.Truck fontSize={24} stroke={'black'} key={8} />
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                ml={4}
                variant={'Body1'}
                fontFamily="Raleway_500Medium"
                key={9}
              >
                Get by Mon 23 Feb - Fri 27 Feb
              </Text>
            </View>
            <View p={3} borderBottomColor={'gray.300'} borderBottomWidth={0.5} key={10}>
              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <Icons.MapPin stroke={'black'} fontSize={24} />
                <Text variant={'body1'} ml={3} fontFamily={'Raleway_500Medium'}>
                  Delivery Address
                </Text>
              </View>
              <View flexDirection={'row'} justifyContent={'center'}>
                <View flexDirection={'column'}>
                  <Text
                    style={{
                      fontVariant: ['lining-nums'],
                    }}
                    numberOfLines={1}
                    fontWeight="medium"
                    variant={'Body2'}
                    fontFamily={'Raleway_500Medium'}
                  >
                    Trần Quyền | 0834196884
                  </Text>
                  <Text
                    style={{
                      fontVariant: ['lining-nums'],
                    }}
                    numberOfLines={1}
                    fontWeight="medium"
                    variant={'Body2'}
                    fontFamily={'Raleway_500Medium'}
                  >
                    12a/2 Đường QL 50, Xã Long An, Cần Giuộc, Long An
                  </Text>
                </View>
              </View>
            </View>
            <FlatList
              data={order ? order?.data.products : null}
              renderItem={({ item }: any) => (
                <ItemProductCheckout
                  key={item.product_id.id}
                  name={item.product_id.name}
                  image={item.product_id.images[0]}
                  price={item.product_id.price}
                  size_color={item.size_id.size + ' |' + item.color_id.name}
                  quantity={item.quantity}
                />
              )}
              keyExtractor={(item, index) => index + ''}
            />
          </View>
        }
      ></FlatList>
      <View h={'27%'} borderTopWidth={0.5} borderTopColor="gray.300">
        <View w="100%" position={'absolute'} bottom={0} left={0}>
          <View borderBottomColor={'gray.400'} borderBottomWidth={0.5} pb={3}>
            <View px={3} flexDirection={'row'} justifyContent="space-between" alignItems={'center'}>
              <Text fontFamily={'Raleway_700Bold'}>{t('OrderDetail.oderCode')}</Text>
              <View flexDirection={'row'} alignItems="center">
                <Text
                  style={{
                    fontVariant: ['lining-nums'],
                  }}
                  fontFamily={'Raleway_700Bold'}
                  mr={3}
                >
                  {id_order}
                </Text>
                <Text fontFamily={'Raleway_500Medium'} color="#075AFA">
                  {t('OrderDetail.copy')}
                </Text>
              </View>
            </View>
            <SSItemFeeOrderDetail style={{}} title={'Payment status'} detail={order?.data.status} />
            <SSItemFeeOrderDetail
              style={{}}
              title={'Paid by'}
              detail={order ? (order?.data.payment_type === 'cod' ? 'Cash' : '...') : '......'}
            />
            <SSItemFeeOrderDetail style={{}} title={'Payment status'} detail={'Waiting'} />
            <SSItemFeeOrderDetail
              style={{}}
              title={t('OrderDetail.paidBy')}
              detail={'MoMo E-Wallet'}
            />
          </View>
          <SSItemFeeOrderDetail
            style={{ fontSize: 16 }}
            title={'Subtotal 3 Item(s)'}
            detail={
              order
                ? formatNumberCurrencyVN(parseFloat(order?.data.total_before_discount))
                : '......'
            }
          />
          <SSItemFeeOrderDetail
            style={{ fontSize: 16 }}
            title={'Shipping fee'}
            detail={formatNumberCurrencyVN(parseFloat(order?.data.total_price))}
          />
          {/* <SSItemFeeOrderDetail
            style={{ color: '#DD1609', fontSize: 16 }}
            title={'Voucher'}
            detail={formatNumberCurrencyVN(parseFloat(order?.data.total_price))}
            title={t('OrderDetail.subTotal' + 3 + t('OrderDetail.item'))}
            detail={'400.000đ'}
          />
          <SSItemFeeOrderDetail
            style={{ fontSize: 16 }}
            title={t('OrderDetail.shippingFee')}
            detail={'130.000đ'}
          />
          <SSItemFeeOrderDetail
            style={{ color: '#DD1609', fontSize: 16 }}
            title={t('OrderDetail.voucher')}
            detail={'-10.000đ'}
          /> */}

          <SelectOptions
            style={{ marginTop: -10 }}
            title=""
            iconLeft={
              <Text
                variant={'Title'}
                fontWeight="bold"
                fontSize="2xl"
                fontFamily={'Raleway_500Medium'}
              >
                {t('OrderDetail.total')}
              </Text>
            }
            iconRight={
              <Text
                variant={'Title'}
                fontWeight="bold"
                fontSize="2xl"
                color={'primary.600'}
                fontFamily={'Raleway_500Medium'}
              >
                {formatNumberCurrencyVN(parseFloat(order?.data.total_price))}
              </Text>
            }
          />
        </View>
      </View>
    </View>
  );
};

export default OrderDetailScreen;
