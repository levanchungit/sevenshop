import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Center, Text, VStack } from 'native-base';
import { useTranslation } from 'react-i18next';
import FlatListUserAddress from 'components/FlatListUserAddress';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetAddresses from 'hook/addresses/useGetAddresses';
import { AddressCheckout } from 'interfaces/Checkout';
import { AddressRouteProp, AppNavigationProp } from 'providers/navigation/types';
import { CheckoutContext } from 'screens/CheckoutScreen/CheckoutContext';

type AddressScreenProps = {
  route: AddressRouteProp;
};

const AddressScreen = (props: AddressScreenProps) => {
  const { typeUser } = props.route.params;
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();
  const { addresses, err_addresses, loading_addresses } = useGetAddresses();
  const [checkedId, setCheckedId] = useState('');
  const { setAddress } = useContext(CheckoutContext);

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
        iconRightHeaderCart={false}
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
        </Center>
      ) : (
        <FlatListUserAddress
          address={addresses?.data.results}
          isLoading={loading_addresses}
          checkId={checkedId}
          setCheckId={setCheckedId}
          typeUser={typeUser}
        />
      )}
      <VStack w="100%">
        <SSButton
          variant={'white'}
          text={'Add address'}
          onPress={() => navigation.replace('EditAddress', { typeEdit: false })}
        />
        <Box marginBottom={3} />
        {typeUser ? null : (
          <SSButton
            variant={'red'}
            text={'Select address'}
            onPress={() => {
              setAddress(
                addresses?.data.results.find((item: AddressCheckout) => item._id === checkedId)
              );
              navigation.goBack();
            }}
          />
        )}
      </VStack>
    </Box>
  );
};

export default AddressScreen;
