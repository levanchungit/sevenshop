import React, { useState } from 'react';
import { FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemAdrress from 'components/ItemAddress';
import SSButton from 'components/SSButton';
import { DATA5 } from 'mocks';

const Address = (onBack: any) => {
  const [isChecked, setIsChecked] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 12,
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
            check={isChecked}
            setCheck={setIsChecked}
            dataId={item.id}
          />
        )}
        keyExtractor={(item) => item.full_name}
      />
      <SSButton variant={'red'} text={'Add address'}></SSButton>
    </SafeAreaView>
  );
};

export default Address;
