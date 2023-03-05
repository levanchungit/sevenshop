import React from 'react';
import { Button, ScrollView, Text, View } from 'native-base';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import NavHeader from 'components/NavHeader';
import SelectOptions from 'components/SelectOptions';
type Props = object;

const CheckoutScreen = (props: Props) => {
  return (
    <View flex={1} pt={3}>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <NavHeader title="Checkout" />
          <View style={{ padding: 12 }} borderBottomColor={'gray.500'} borderBottomWidth={0.5}>
            <View style={{ flexDirection: 'row', marginBottom: 8 }}>
              <Icons.MapPin stroke={'black'} fontSize={24} />
              <Text variant={'body1'} style={{ marginLeft: 12 }} fontFamily={'Raleway_500Medium'}>
                Delivery Address
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent={'center'}>
              <View flexDirection={'column'}>
                <Text
                  numberOfLines={1}
                  fontWeight="medium"
                  variant={'Body2'}
                  fontFamily={'Raleway_500Medium'}
                >
                  Trần Quyền | 0834196884
                </Text>
                <Text
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
      <View h={'32%'}>
        <View w="100%" position={'absolute'} bottom={0} left={0}>
          <SelectOptions
            style={{}}
            title="Checkout"
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
                  style={{ marginBottom: 4, marginRight: 8 }}
                  variant="Body2"
                  fontFamily={'Raleway_500Medium'}
                >
                  Giảm 20%
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
            iconRight={<Text>20.000đ</Text>}
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
                fontFamily={'Raleway_500Medium'}
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
                fontFamily={'Raleway_500Medium'}
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
