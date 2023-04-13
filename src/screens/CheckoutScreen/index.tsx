import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';
import { Button, FlatList, Pressable, Text, Toast, View } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import SelectOptions from 'components/SelectOptions';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import { PAYMENT_TYPE } from 'global/constants';
import { checkoutAPI } from 'modules';
import { AppNavigationProp, CheckoutRouteProp } from 'providers/navigation/types';
import { formatNumberCurrencyVN } from 'utils/common';
import { CheckoutContext } from './CheckoutContext';

type Props = {
  route: CheckoutRouteProp;
};
const CheckoutScreen = ({ route }: Props) => {
  const { data } = route.params;
  console.log('ee', data);
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();
  const { paymentType } = useContext(CheckoutContext);
  const data2 = Object.assign(data, {
    payment_type: paymentType + '',
    note: 'SYS test',
    voucher_id: '',
  });
  console.log('data2', data2);
  console.log('payment_type', paymentType);

  const checkout = async () => {
    if (data2.address) {
      try {
        const response = await checkoutAPI.checkout(data2);
        navigation.replace('PaymentSuccess', { data_detail: response.data });
      } catch (error: any) {
        console.error(error.message);
        Toast.show({
          title: error,
          duration: 3000,
        });
      }
    } else {
      Toast.show({
        title: 'Please add address!',
        duration: 3000,
      });
    }
  };

  const onCheckout = async () => {
    //check payment_type: bank
    if (data.payment_type === PAYMENT_TYPE.bank) {
      //total order
      const _data = {
        amount: Math.floor(1314 * 100),
      };
      console.log(_data);
      const response = await checkoutAPI.stripe(_data);

      if (response.error) {
        Toast.show({
          title: response.error,
          duration: 3000,
        });
        return;
      }

      const initResponse = await initPaymentSheet({
        merchantDisplayName: 'SevenShop',
        paymentIntentClientSecret: response.paymentIntent,
      });

      if (initResponse.error) {
        Toast.show({
          title: 'Payment sheet failed to initialize',
          duration: 3000,
        });
        return;
      }

      await presentPaymentSheet();
    } else if (data.payment_type === PAYMENT_TYPE.momo) {
      Toast.show({
        title: 'Coming soon',
        duration: 3000,
      });
      return;
    }

    await checkout();
  };

  return (
    <View flex={1} pt={3} backgroundColor="white">
      <View mt={3}>
        <SSHeaderNavigation
          tabHeaderSearchEnabled={false}
          titleHeaderSearchEnabled={false}
          iconSearchEnabled={false}
          iconOther={false}
          titleHeaderSearch={''}
          titleHeaderScreen={t('Checkout.title')}
          iconRightHeaderScreen={false}
          quantityItems={0}
          iconRightHeaderCart={false}
          quantityHeaderCarts={0}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={null}
        renderItem={null}
        ListHeaderComponent={() => {
          return (
            <View mt={1}>
              <Pressable
                style={{ padding: 12 }}
                onPress={() => navigation.navigate('Address', { typeUser: true })}
                borderBottomColor={'gray.400'}
                borderBottomWidth={0.5}
              >
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                  <Icons.MapPin stroke={'black'} fontSize={24} />
                  <Text
                    variant={'body1'}
                    style={{ marginLeft: 12 }}
                    fontFamily={'Raleway_500Medium'}
                  >
                    {t('Checkout.deliveryAddress')}
                  </Text>
                </View>
                <View flexDirection={'row'} justifyContent={'space-between'} alignItems="center">
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
                      {data.address ? data.address.full_name : 'You dont have address'} |{' '}
                      {data.address ? data.address.phone : '...'}
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
                      {data.address ? data.address.address : 'Please add address!'}
                    </Text>
                  </View>
                  <Icons.ChevronRight stroke={'black'} fontSize={24} />
                </View>
              </Pressable>

              <FlatList
                data={data.products}
                renderItem={({ item }) => (
                  <ItemProductCheckout
                    name={item.name}
                    image={item.images[0]}
                    price={item.price}
                    size_color={'XXL_Back'}
                    quantity={item.quantity}
                  />
                )}
                keyExtractor={(item, index) => index + ''}
              />
            </View>
          );
        }}
      ></FlatList>
      <View h={'30%'} borderTopWidth={0.5} borderTopColor="gray.200">
        <View w="100%" position={'absolute'} bottom={0} left={0}>
          <SelectOptions
            style={{}}
            title={t('Checkout.paymentOption')}
            iconLeft={<Icons.CreditCard stroke={'black'} width={24} height={24} />}
            iconRight={
              <Pressable
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => navigation.navigate('PaymentMethodScreen')}
              >
                <Text
                  style={{ marginBottom: 4, marginRight: 8 }}
                  variant="Body2"
                  fontFamily={'Raleway_500Medium'}
                >
                  {t('Checkout.cashOnDelivery')}
                </Text>
                <Icons.ChevronRight stroke={'black'} width={24} height={24} />
              </Pressable>
            }
          />

          <SelectOptions
            style={{}}
            title={t('Checkout.myVoucher')}
            iconLeft={<Icons.Gift stroke={'black'} width={24} height={24} />}
            iconRight={
              <Pressable
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => console.log('payment_type2', paymentType)}
              >
                <Text
                  style={{ marginBottom: 4, marginRight: 8, fontVariant: ['lining-nums'] }}
                  variant="Body2"
                  fontFamily={'Raleway_500Medium'}
                >
                  {t('Checkout.chooseVoucher')}
                </Text>
                <Icons.ChevronRight stroke={'black'} width={24} height={24} />
              </Pressable>
            }
          />

          <SelectOptions
            style={{}}
            title=""
            iconLeft={
              <Text variant={'Body1'} fontFamily={'Raleway_500Medium'}>
                {t('Checkout.shippingFee')}
              </Text>
            }
            iconRight={
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                fontFamily={'Raleway_500Medium'}
              >
                {formatNumberCurrencyVN(20000)}
              </Text>
            }
          />

          <SelectOptions
            style={{}}
            title=""
            iconLeft={
              <Text
                variant={'Title'}
                fontWeight="bold"
                fontSize="2xl"
                fontFamily={'Raleway_500Medium'}
              >
                {t('Checkout.total')}
              </Text>
            }
            iconRight={
              <Text
                variant={'Title'}
                fontWeight="bold"
                fontSize="2xl"
                color={'primary.600'}
                fontFamily={'Raleway_700Bold'}
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                {formatNumberCurrencyVN(data2.total_invoice_discount)}
              </Text>
            }
          />
          <View alignItems={'center'} px={'3'}>
            <Button onPress={onCheckout} borderRadius={6} w={{ base: '100%' }} mb="3" mt="3">
              <Text
                fontSize={14}
                color="light.100"
                fontWeight={'bold'}
                fontFamily={'Raleway_700Bold'}
              >
                {t('Checkout.title')}
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;
