import React from 'react';
import { ScrollView, Text, View } from 'native-base';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import SelectOptions from 'components/SelectOptions';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSItemFeeOrderDetail from 'components/SSItemFeeOrderDetail';
type Props = object;

const OrderDetailScreen = (props: Props) => {
  return (
    <View flex={1} pt={3}>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <SSHeaderNavigation
            tabHeaderSearchEnabled={false}
            titleHeaderSearchEnabled={false}
            iconSearchEnabled={false}
            iconOther={false}
            titleHeaderSearch={''}
            titleHeaderScreen={'Order Detail'}
            iconRightHeaderScreen={true}
            quantityItems={0}
          />
          <View backgroundColor={'#EDC5C1'} p="4" mt={1}>
            <Text
              mb={3}
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
          <View flexDirection={'row'} p={4} borderBottomWidth={0.5} borderBottomColor="gray.400">
            <Icons.Truck fontSize={24} stroke={'black'} />
            <Text ml={4} variant={'Body1'} fontFamily="Raleway_500Medium">
              Get by Mon 23 Feb - Fri 27 Feb
            </Text>
          </View>
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
      <View h={'33%'}>
        <View w="100%" position={'absolute'} bottom={0} left={0}>
          <View borderBottomColor={'gray.400'} borderBottomWidth={0.5} pb={3}>
            <View px={3} flexDirection={'row'} justifyContent="space-between" alignItems={'center'}>
              <Text fontFamily={'Raleway_700Bold'}>Order No.</Text>
              <View flexDirection={'row'} alignItems="center">
                <Text fontFamily={'Raleway_700Bold'} mr={3}>
                  1234567890
                </Text>
                <Text fontFamily={'Raleway_500Medium'} color="#075AFA">
                  Copy
                </Text>
              </View>
            </View>
            <SSItemFeeOrderDetail style={{}} title={'Payment status'} detail={'Waiting'} />
            <SSItemFeeOrderDetail style={{}} title={'Paid by'} detail={'MoMo E-Wallet'} />
          </View>
          <SSItemFeeOrderDetail
            style={{ fontSize: 16 }}
            title={'Subtotal 3 Item(s)'}
            detail={'400.000đ'}
          />
          <SSItemFeeOrderDetail
            style={{ fontSize: 16 }}
            title={'Shipping fee'}
            detail={'130.000đ'}
          />
          <SSItemFeeOrderDetail
            style={{ color: '#DD1609', fontSize: 16 }}
            title={'Voucher'}
            detail={'-10.000đ'}
          />

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
        </View>
      </View>
    </View>
  );
};

export default OrderDetailScreen;
