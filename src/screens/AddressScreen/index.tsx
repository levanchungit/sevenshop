import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemAdrress from 'components/ItemAddress';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import { DATA5 } from 'mocks';

const Address = (onBack: any) => {
  const navigation = useNavigation<AppNavigationProp>();
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
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={'Address'}
        iconRightHeaderScreen={false}
        quantityItems={0}
      />
      <Box marginY={3} />
      <FlatList
        data={DATA5}
        renderItem={({ item }) => (
          <ItemAdrress address={item} check={isChecked} setCheck={setIsChecked} />
        )}
        keyExtractor={(item) => item.full_name}
      />
      <Box marginBottom={3} />
      <SSButton
        variant={'white'}
        text={'Add address'}
        onPress={() => navigation.navigate('EditAddress', { typeEdit: false })}
      ></SSButton>
      <Box marginBottom={3} />
      <SSButton
        variant={'red'}
        text={'Select address'}
        onPress={() => console.log('Selected')}
      ></SSButton>
    </SafeAreaView>
  );
};

export default Address;
