import React from 'react';
import { FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemAdrress from 'components/ItemAddress';
import SSButton from 'components/SSButton';
import { DATA5 } from 'mocks';

const Address = (onBack: any) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 12,
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}
    >
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
      <SSButton variant={'white'}></SSButton>
    </SafeAreaView>
  );
};

export default Address;
