import React from 'react';
import { View, Text, Pressable } from 'native-base';
import * as Icons from 'react-native-feather';

type Props = {
  tabHeaderSearchEnabled: boolean;
  titleHeaderSearchEnabled: boolean;
  iconSearchEnabled: boolean;
  iconOther: boolean;
  titleHeaderSearch: string;
  titleHeaderScreen: string;
  iconRightHeaderScreen: boolean;
  quantityItems: number;
};

const SSHeaderNavigation = (props: Props) => {
  const {
    tabHeaderSearchEnabled,
    titleHeaderSearchEnabled,
    iconSearchEnabled,
    iconOther,
    titleHeaderScreen,
    titleHeaderSearch,
    iconRightHeaderScreen,
    quantityItems,
  } = props;

  return tabHeaderSearchEnabled ? (
    <View flexDirection={'row'} justifyContent="space-between">
      {titleHeaderSearchEnabled ? (
        <Text variant="Title" fontWeight={'bold'} fontSize={20}>
          {titleHeaderSearch}
        </Text>
      ) : (
        <View></View>
      )}
      <View flexDirection={'row'}>
        {iconSearchEnabled ? (
          <Icons.Search style={{ marginRight: 12 }} width={24} height={24} stroke={'black'} />
        ) : null}
        {!iconOther ? (
          <Icons.ShoppingCart width={24} height={24} stroke={'black'} />
        ) : (
          <Icons.Settings width={24} height={24} stroke={'black'} />
        )}
      </View>
      {!iconOther ? (
        <Pressable
          position={'absolute'}
          alignItems="center"
          justifyContent={'center'}
          backgroundColor="primary.600"
          w={6}
          h={6}
          top={-12}
          right={-8}
          borderRadius={15}
        >
          <Text color="white" fontSize={14} lineHeight={14}>
            {quantityItems}
          </Text>
        </Pressable>
      ) : null}
    </View>
  ) : (
    <View flexDirection={'row'} alignItems="center" justifyContent={'space-between'}>
      <View flexDirection={'row'} alignItems="center">
        <Icons.ChevronLeft stroke={'black'} width={24} height={24} />
        <Text ml={3} variant="Title" fontWeight={'bold'} fontSize={20}>
          {titleHeaderScreen}
        </Text>
      </View>
      {iconRightHeaderScreen ? (
        <Icons.Headphones stroke={'black'} width={24} height={24} />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default SSHeaderNavigation;
