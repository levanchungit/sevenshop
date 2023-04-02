import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, FlatList, Pressable, Text, Toast, View } from 'native-base';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import SelectOptions from 'components/SelectOptions';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import { checkoutAPI } from 'modules';
import { AppNavigationProp, CheckoutRouteProp } from 'providers/navigation/types';
type Props = {
  route: CheckoutRouteProp;
};
const CheckoutScreen = ({ route }: Props) => {
  const { data } = route.params;
  console.log('ee', data);
  const navigation = useNavigation<AppNavigationProp>();
  const data2 = Object.assign(data, { payment_type: 'cod', note: 'SYS test', voucher_id: '' });

  const checkout = async () => {
    try {
      await checkoutAPI.checkout(data2);
      navigation.replace('PaymentSuccess', { id_order: '641b181583592d4bbdf72e92' });
    } catch (error: any) {
      console.error(error);
      Toast.show({
        title: error,
        duration: 3000,
      });
    }
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
          titleHeaderScreen={'Checkout'}
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
                // onPress={() => navigation.navigate('Address')}
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
                    Delivery Address
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
                      {data.address.full_name} | {data.address.phone}
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
                      {data.address.address}
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
                keyExtractor={(item) => item.product_id}
              />
            </View>
          );
        }}
      ></FlatList>
      <View h={'30%'} borderTopWidth={0.5} borderTopColor="gray.200">
        <View w="100%" position={'absolute'} bottom={0} left={0}>
          <SelectOptions
            style={{}}
            title="Payment Options"
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
                  Cash on delivery
                </Text>
                <Icons.ChevronRight stroke={'black'} width={24} height={24} />
              </Pressable>
            }
          />

          <SelectOptions
            style={{}}
            title="My Voucher"
            iconLeft={<Icons.Gift stroke={'black'} width={24} height={24} />}
            iconRight={
              <Pressable
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                onPress={() => navigation.navigate('SelectVoucher')}
              >
                <Text
                  style={{ marginBottom: 4, marginRight: 8, fontVariant: ['lining-nums'] }}
                  variant="Body2"
                  fontFamily={'Raleway_500Medium'}
                >
                  Reduce 20%
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
                Shipping fee
              </Text>
            }
            iconRight={
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                fontFamily={'Raleway_500Medium'}
              >
                20.000đ
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
                Total
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
                520.000đ
              </Text>
            }
          />
          <View alignItems={'center'} px={'3'}>
            <Button onPress={checkout} borderRadius={6} w={{ base: '100%' }} mb="3" mt="3">
              <Text
                fontSize={14}
                color="light.100"
                fontWeight={'bold'}
                fontFamily={'Raleway_700Bold'}
              >
                Checkout
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckoutScreen;
