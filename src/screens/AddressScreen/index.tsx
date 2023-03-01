import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Flex, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemAdrress from 'components/ItemAddress';
import { DATA5 } from 'mocks';
import { AppNavigationProp } from 'providers/navigation/types';

const Address = (onBack: any) => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 12,
        paddingHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
      }}
    >
      <Flex direction="row" justifyContent={'space-between'}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon.ChevronLeft stroke="black" />
        </Pressable>
        <Pressable>
          <Icon.ShoppingCart stroke="black" />
        </Pressable>
      </Flex>
      <FlatList
        data={DATA5}
        renderItem={({ item }) => (
          <ItemAdrress
            name={item.full_name}
            phone={item.phone}
            address={item.address}
            isDefault={item.isDefault}
            checked={false}
          />
        )}
        keyExtractor={(item) => item.full_name}
      />
    </SafeAreaView>
  );
};

export default Address;
