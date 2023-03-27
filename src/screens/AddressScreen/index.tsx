import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Center, FlatList, Text, VStack } from 'native-base';
import ItemAdrress from 'components/ItemAddress';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetAddresses from 'hook/addresses/useGetAddresses';
import { IAddresses } from 'interfaces/Address';
import { AppNavigationProp } from 'providers/navigation/types';

const AddressScreen = (onBack: any) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { addresses, err_addresses, loading_addresses } = useGetAddresses();
  if (!loading_addresses) {
    console.log(addresses?.data);
  }
  const [isChecked, setIsChecked] = useState('');
  return (
    <Box flex={1} paddingY={2} paddingX={3} backgroundColor="#FFFFFF" safeArea>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={'Address'}
        iconRightHeaderScreen={false}
        quantityItems={0}
        iconRightHeaderCart={false}
        quantityHeaderCarts={0}
      />
      {err_addresses ? (
        <Center
          h="100%"
          position="absolute"
          top={8}
          left={3}
          right={3}
          backgroundColor={'transparent'}
        >
          <Text variant="title">Error</Text>
        </Center>
      ) : addresses?.data.total === 0 ? (
        <Center
          h="100%"
          position="absolute"
          top={8}
          left={3}
          right={3}
          backgroundColor={'transparent'}
        >
          <Text variant="title" mb={3}>
            Cannot find any address. Would you like to create one?
          </Text>
          <SSButton
            width="100%"
            variant={'white'}
            text={'Add address'}
            onPress={() => navigation.navigate('EditAddress', { typeEdit: false })}
          />
        </Center>
      ) : (
        <VStack>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={addresses?.data.results}
            renderItem={({ item }: { item: IAddresses }) => (
              <ItemAdrress address={item} check={isChecked} setCheck={setIsChecked} />
            )}
            keyExtractor={(item) => item.results.full_name}
          />
          <Box marginBottom={3} />
          <SSButton
            variant={'white'}
            text={'Add address'}
            onPress={() => navigation.navigate('EditAddress', { typeEdit: false })}
          />
          <Box marginBottom={3} />
          <SSButton
            variant={'red'}
            text={'Select address'}
            onPress={() => navigation.navigate('CheckoutScreen', { address_id: isChecked })}
          />
        </VStack>
      )}
    </Box>
  );
};

export default AddressScreen;
