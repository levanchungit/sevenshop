import React from 'react';
import { Button, ScrollView, Text, View } from 'native-base';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import SelectOptions from 'components/SelectOptions';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
type Props = object;

const CheckoutScreen = (props: Props) => {
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
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View mt={1}>
          <View style={{ padding: 12 }} borderBottomColor={'gray.400'} borderBottomWidth={0.5}>
            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
              <Icons.MapPin stroke={'black'} fontSize={24} />
              <Text variant={'body1'} style={{ marginLeft: 12 }} fontFamily={'Raleway_500Medium'}>
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
              <Icons.ChevronRight stroke={'black'} fontSize={24} />
            </View>
          </View>
          {/* <FlatListProductForYou data={data} /> */}
          <ItemProductCheckout
            name="Áo sơ mi nam phối màu cực chất"
            price={123}
            image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
            size_color="XL_Black"
            quantity={2}
          />
          <ItemProductCheckout
            name="Áo sơ mi nam phối màu cực chất"
            price={123}
            image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
            size_color="XL_Black"
            quantity={2}
          />
          <ItemProductCheckout
            name="Áo sơ mi nam phối màu cực chất"
            price={123}
            image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
            size_color="XL_Black"
            quantity={2}
          />
          <ItemProductCheckout
            name="Áo sơ mi nam phối màu cực chất"
            price={123}
            image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
            size_color="XL_Black"
            quantity={2}
          />
          <ItemProductCheckout
            name="Áo sơ mi nam phối màu cực chất"
            price={123}
            image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
            size_color="XL_Black"
            quantity={2}
          />
          <ItemProductCheckout
            name="Áo sơ mi nam phối màu cực chất"
            price={123}
            image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
            size_color="XL_Black"
            quantity={2}
          />
        </View>
      </ScrollView>
      <View h={'30%'} borderTopWidth={0.5} borderTopColor="gray.200">
        <View w="100%" position={'absolute'} bottom={0} left={0}>
          <SelectOptions
            style={{}}
            title="Payment Options"
            iconLeft={<Icons.CreditCard stroke={'black'} width={24} height={24} />}
            iconRight={
              <View
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
              >
                <Text
                  style={{ marginBottom: 4, marginRight: 8 }}
                  variant="Body2"
                  fontFamily={'Raleway_500Medium'}
                >
                  Cash on delivery
                </Text>
                <Icons.ChevronRight stroke={'black'} width={24} height={24} />
              </View>
            }
          />

          <SelectOptions
            style={{}}
            title="My Voucher"
            iconLeft={<Icons.Gift stroke={'black'} width={24} height={24} />}
            iconRight={
              <View
                style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
              >
                <Text
                  style={{ marginBottom: 4, marginRight: 8, fontVariant: ['lining-nums'] }}
                  variant="Body2"
                  fontFamily={'Raleway_500Medium'}
                >
                  Reduce 20%
                </Text>
                <Icons.ChevronRight stroke={'black'} width={24} height={24} />
              </View>
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
            <Button
              onPress={() => alert('payment success')}
              borderRadius={6}
              w={{ base: '100%' }}
              mb="3"
              mt="3"
            >
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
