import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'native-base';
import * as Icons from 'react-native-feather';
import useGetQuantityCart from 'hook/product/useGetQuantityCart';
import { AppNavigationProp } from 'providers/navigation/types';

type Props = {
  tabHeaderSearchEnabled: boolean;
  titleHeaderSearchEnabled: boolean;
  iconSearchEnabled: boolean;
  iconOther: boolean;
  titleHeaderSearch: string;
  titleHeaderScreen: string;
  iconRightHeaderScreen: boolean;
  iconRightHeaderCart: boolean;
};

const SSHeaderNavigation = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { quantity } = useGetQuantityCart();

  const {
    tabHeaderSearchEnabled,
    titleHeaderSearchEnabled,
    iconSearchEnabled,
    iconOther,
    titleHeaderScreen,
    titleHeaderSearch,
    iconRightHeaderScreen,
    iconRightHeaderCart,
  } = props;

  return tabHeaderSearchEnabled ? (
    <View
      position={'absolute'}
      zIndex={999}
      flexDirection={'row'}
      justifyContent="space-between"
      paddingX={3}
      pb={2}
      mt={4}
      width={'100%'}
      backgroundColor={'red'}
    >
      {titleHeaderSearchEnabled ? (
        <Text variant="Title" fontWeight={'bold'} fontSize={20}>
          {titleHeaderSearch}
        </Text>
      ) : (
        <View></View>
      )}
      <View flexDirection={'row'} alignItems={'flex-end'}>
        {iconSearchEnabled ? (
          <Icons.Search style={{ marginRight: 12 }} width={24} height={24} stroke={'black'} />
        ) : null}
        {!iconOther ? (
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <Icons.ShoppingCart width={24} height={24} stroke={'black'} />
          </Pressable>
        ) : (
          <Pressable onPress={() => navigation.navigate('AccountSettings')}>
            <Icons.Settings width={24} height={24} stroke={'black'} />
          </Pressable>
        )}
      </View>
      {!iconOther ? (
        <View
          position={'absolute'}
          alignItems="center"
          justifyContent={'center'}
          backgroundColor="primary.600"
          w={6}
          h={6}
          top={-12}
          right={1}
          borderRadius={15}
        >
          <Text color="white" fontSize={14} lineHeight={14}>
            {quantity?.data.quantity}
          </Text>
        </View>
      ) : (
        <></>
      )}
    </View>
  ) : (
    <View
      flexDirection={'row'}
      alignItems="center"
      justifyContent={'space-between'}
      paddingX={3}
      pb={2}
    >
      <Pressable flexDirection={'row'} alignItems="center" onPress={() => navigation.goBack()}>
        <Icons.ChevronLeft stroke={'black'} width={24} height={24} />
        <Text ml={3} variant="Title" fontWeight={'bold'} fontSize={20}>
          {titleHeaderScreen}
        </Text>
      </Pressable>
      {iconRightHeaderScreen ? (
        iconRightHeaderCart ? (
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <Icons.ShoppingCart width={24} height={24} stroke={'black'} />
            <View
              position={'absolute'}
              alignItems="center"
              justifyContent={'center'}
              backgroundColor="primary.600"
              w={6}
              h={6}
              top={-12}
              right={-12}
              borderRadius={15}
            >
              <Text color="white" fontSize={14} lineHeight={14}>
                {quantity?.data.quantity}
              </Text>
            </View>
          </Pressable>
        ) : (
          <Icons.Headphones stroke={'black'} width={24} height={24} />
        )
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default SSHeaderNavigation;
