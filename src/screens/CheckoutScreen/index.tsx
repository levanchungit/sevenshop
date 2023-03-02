import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'native-base';
import * as Icons from 'react-native-feather';
import ItemProductCheckout from 'components/ItemProductCheckout';
import NavHeader from 'components/NavHeader';
import SelectOptions from 'components/SelectOptions';
type Props = object;

const CheckoutScreen = (props: Props) => {
  return (
    <ScrollView>
      <View style={{ marginTop: 20 }}>
        <NavHeader />
        <View style={{ padding: 12 }} borderBottomColor={'gray.500'} borderBottomWidth={0.5}>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            <Icons.MapPin stroke={'black'} fontSize={24} />
            <Text variant={'body1'} style={{ marginLeft: 12 }}>
              Delivery Address
            </Text>
          </View>
          <View flexDirection={'column'}>
            <Text>Trần Quyền | 0834196884</Text>
            <Text numberOfLines={1}>12a/2 Đường QL 50, Xã Long An, Cần Giuộc, Long An</Text>
          </View>
        </View>
        {/* <FlatListProductForYou data={data} /> */}
        <ItemProductCheckout
          name="Áo sơ mi nam phối màu cực chất"
          price={123}
          image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
          size_color="XL_Black"
        />
        <ItemProductCheckout
          name="Áo sơ mi nam phối màu cực chất"
          price={123}
          image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
          size_color="XL_Black"
        />

        <SelectOptions
          style={{}}
          title="Checkout"
          iconLeft={<Icons.CreditCard stroke={'black'} width={24} height={24} />}
          iconRight={<Icons.ChevronRight stroke={'black'} width={24} height={24} />}
        />
        <SelectOptions
          style={{ paddingHorizontal: 12 }}
          title="Cash on delivery"
          iconLeft={<Icons.DollarSign stroke={'black'} width={24} height={24} />}
          iconRight={
            <Image
              alt="124"
              style={{ width: 24, height: 24 }}
              source={require('../../assets/images/button_check_red.png')}
            />
          }
        />
        <SelectOptions
          style={{}}
          title="My Voucher"
          iconLeft={<Icons.Gift stroke={'black'} width={24} height={24} />}
          iconRight={
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ marginBottom: 4 }} variant="Body2">
                Giảm 20%
              </Text>
              <Icons.ChevronRight stroke={'black'} width={24} height={24} />
            </View>
          }
        />

        <SelectOptions
          style={{}}
          title=""
          iconLeft={<Text variant={'Body1'}>Shipping fee</Text>}
          iconRight={<Text>20.000đ</Text>}
        />

        <SelectOptions
          style={{}}
          title=""
          iconLeft={
            <Text variant={'Title'} fontWeight="bold" fontSize="2xl">
              Total
            </Text>
          }
          iconRight={
            <Text variant={'Title'} fontWeight="bold" fontSize="2xl" color={'primary.600'}>
              520.000đ
            </Text>
          }
        />

        <View alignItems={'center'} px={'3'}>
          <Button
            onPress={() => alert('payment success')}
            borderRadius={6}
            w={{ base: '100%' }}
            mb="1"
            mt="3"
          >
            <Text fontSize={14} color="light.100" fontWeight={'bold'}>
              Checkout
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckoutScreen;
