import React, { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Box, Center, Text, VStack } from 'native-base';
import { Dimensions } from 'react-native';
import FlatListUserAddress from 'components/FlatListUserAddress';
import { Box, FlatList } from 'native-base';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemAdrress from 'components/ItemAddress';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetAddresses from 'hook/addresses/useGetAddresses';
import { AddressRouteProp, AppNavigationProp } from 'providers/navigation/types';

type AddressScreenProps = {
  route: AddressRouteProp;
};

const AddressScreen = (props: AddressScreenProps) => {
  const { typeUser } = props.route.params;
  const initialWidth = Dimensions.get('window').width;
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();
  const { addresses, err_addresses, loading_addresses, mutate_addresses } = useGetAddresses();
  const isFocused = useIsFocused();
  if (isFocused) {
    mutate_addresses;
    if (!loading_addresses) {
      console.log(addresses?.data.results);
    }
  }
  const [checkedId, setCheckedId] = useState('');
  return (
    <Box flex={1} paddingY={2} paddingX={3} backgroundColor="#FFFFFF" safeArea>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={t('Address.title')}
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
            onPress={() =>
              navigation.navigate('EditAddress', { typeEdit: false, mutate: mutate_addresses })
            }
          />
        </Center>
      ) : (
        <FlatListUserAddress
          address={addresses?.data.results}
          isLoading={loading_addresses}
          checkId={checkedId}
          setCheckId={setCheckedId}
          mutate={mutate_addresses}
        />
      )}
      <VStack position="absolute" bottom={0} w={initialWidth} paddingY={2} paddingX={3}>
        <SSButton
          variant={'white'}
          text={'Add address'}
          onPress={() =>
            navigation.navigate('EditAddress', { typeEdit: false, mutate: mutate_addresses })
          }
        />
        <Box marginBottom={3} />
        {typeUser ? null : (
          <SSButton
            variant={'red'}
            text={'Select address'}
            onPress={() => console.log('CheckoutScreen', { address_id: checkedId })}
          />
        )}
      </VStack>
    </Box>
  );
};

export default AddressScreen;
