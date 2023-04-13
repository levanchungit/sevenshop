import React from 'react';
import { Text, View, Image, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import IconCheck from 'components/IconCheck';
import { IData } from 'interfaces/Cart';
import { formatNumberCurrencyVN } from 'utils/common';

type Props = {
  cart: IData;
  increaseQuantity: Function;
  decreaseQuantity: Function;
  setShowModal: any;
  isChecked: boolean;
  onPressChecked: Function;
};

const ItemCart = (props: Props) => {
  const { cart, setShowModal, increaseQuantity, decreaseQuantity, isChecked, onPressChecked } =
    props;
  return (
    <View flexDirection={'row'} mt={2} w={'100%'} h={110} alignItems={'center'} borderRadius={10}>
      <View w={'6%'}>
        <Pressable onPress={() => onPressChecked()}>
          <IconCheck isChecked={isChecked} />
        </Pressable>
      </View>
      <View flexDirection={'row'} w={'100%'}>
        <View ml={1} w={'27%'} h={'100%'} borderRadius={10}>
          <Image
            alt="Image nè"
            borderRadius={10}
            w={'100%'}
            h={'100%'}
            source={
              cart?.images[0]
                ? { uri: cart?.images[0] }
                : require('../../assets/images/logo_sevenshop_image_default.png')
            }
          />
        </View>
        <View
          flexDirection={'column'}
          ml={2}
          w={'72%'}
          height={'100%'}
          justifyContent={'space-between'}
        >
          <Text variant={'subtitle1'}>{cart?.name}</Text>
          <Pressable
            mt={1}
            borderWidth={0.5}
            borderColor={'coolGray.400'}
            w={'60%'}
            h={'25%'}
            borderRadius={4}
            flexDirection={'row'}
            alignItems={'center'}
            onPress={setShowModal}
          >
            <View flexDirection={'row'} ml={2} w={'70%'}>
              <Text variant={'caption'} w={'100%'} color={'black'}>
                {cart.color.name} | {cart.size.size}
              </Text>
            </View>
            <Icon.ChevronDown stroke="black" width={24} height={24} />
          </Pressable>
          <View w={'100%'} flexDirection={'row'}>
            <View w={'60%'}>
              <Text
                mt={1}
                variant={'overline'}
                style={{
                  fontVariant: ['lining-nums'],
                }}
                strikeThrough
                color={'gray.500'}
              >
                {formatNumberCurrencyVN(cart?.price)}
              </Text>
              <Text mt={1} color={'primary.600'} variant={'button'}>
                {formatNumberCurrencyVN(cart?.price_sale)}
              </Text>
            </View>
            <View flexDirection={'row'} alignItems={'center'} mt={4}>
              <Pressable onPress={() => decreaseQuantity()}>
                <Icon.Minus stroke="black" width={18} height={18} />
              </Pressable>
              <View
                w={6}
                h={6}
                borderRadius={4}
                borderWidth={0.5}
                borderColor={'coolGray.400'}
                ml={2}
                mr={2}
              >
                <Text fontWeight={'bold'} fontSize={14} textAlign={'center'}>
                  {cart?.quantity}
                </Text>
              </View>
              <Pressable onPress={() => increaseQuantity()}>
                <Icon.Plus stroke="black" width={18} height={18} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
