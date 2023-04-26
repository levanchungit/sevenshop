import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, Flex, Switch, Toast } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSTextInput from 'components/SSTextInput';
import { AddressesPayload } from 'interfaces/Address';
import addressAPI from 'modules/addressAPI';
import { AppNavigationProp, EditAddressRouteProp } from 'providers/navigation/types';

type EditAddressScreenProps = {
  route: EditAddressRouteProp;
};

const EditAddressScreen = (props: EditAddressScreenProps) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { t } = useTranslation();
  const { typeEdit, address } = props.route.params;
  const [isDefault, setIsDefault] = useState<boolean>(!address ? false : address?.default_address);
  // const [selectedType, setSelectedType] = useState<string>('');
  const [name, setName] = useState<string>(!address ? '' : address?.full_name);
  const [phone, setPhone] = useState<string>(!address ? '' : address?.phone);
  const [addressDescription, setAddressDescription] = useState<string>(
    !address ? '' : address?.address
  );
  const [_id] = useState<string>(!address ? '' : address?._id);

  //api
  const data: AddressesPayload = {
    address: addressDescription,
    full_name: name,
    phone,
    default_address: isDefault,
  };
  const addAddress = async () => {
    try {
      await addressAPI.addAddress(data);
      Toast.show({
        title: 'Successfully added address',
        placement: 'top',
      });
      navigation.replace('Address', { typeUser: false });
    } catch (error: any) {
      Toast.show({
        title: 'Cannot add address',
        description: error.response.data.message ? error.response.data.message : error.message,
        placement: 'top',
      });
    }
  };
  const editAddress = async () => {
    try {
      await addressAPI.editAddress(data, _id);
      Toast.show({
        title: 'Successfully update address',
        placement: 'top',
      });
      navigation.replace('Address', { typeUser: true });
    } catch (error: any) {
      Toast.show({
        title: 'Cannot update address',
        description: error.response.data.message ? error.response.data.message : error.message,
        placement: 'top',
      });
    }
  };
  const deleteAddress = async () => {
    try {
      await addressAPI.deleteAddress(_id);
      Toast.show({
        title: 'Successfully delete address',
        placement: 'top',
      });
      navigation.replace('Address', { typeUser: true });
    } catch (error: any) {
      Toast.show({
        title: 'Cannot delete address',
        description: error.response.data.message ? error.response.data.message : error.message,
        placement: 'top',
      });
    }
  };

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
        titleHeaderScreen={typeEdit === true ? t('Address.editAddress') : t('Address.newAddress')}
        iconRightHeaderScreen={false}
        iconRightHeaderCart={false}
      />

      <SSTextInput
        placeholder={t('Address.name')}
        typePassword={false}
        inputLeftElement={<Icon.User strokeWidth={1} stroke={'black'} />}
        value={name === undefined ? '' : name}
        changeValue={setName}
        width="100%"
      />

      <SSTextInput
        placeholder={t('Address.phone')}
        typePassword={false}
        inputLeftElement={<Icon.Phone strokeWidth={1} stroke={'black'} />}
        value={phone === undefined ? '' : phone.toString()}
        changeValue={setPhone}
        width="100%"
        keyboardType={'phone-pad'}
      />

      <SSTextInput
        placeholder={t('Address.address')}
        typePassword={false}
        inputLeftElement={<Icon.MapPin strokeWidth={1} stroke={'black'} />}
        value={addressDescription === undefined ? '' : addressDescription}
        changeValue={setAddressDescription}
        width="100%"
      />

      <Flex direction="row" alignItems="center" p={3} justifyContent="space-between">
        <Text variant={'body1'} w="50%">
          {t('Address.setDefault')}
        </Text>
        <Switch
          size="lg"
          onToggle={() => setIsDefault(!isDefault)}
          disabled={!!address?.default_address}
          isChecked={isDefault}
        />
      </Flex>

      <SSButton
        variant={'white'}
        onPress={() =>
          typeEdit === true ? deleteAddress() : navigation.replace('Address', { typeUser: true })
        }
        text={typeEdit === true ? t('Address.delete') : 'Cancel'}
      />
      <Box width={'100%'} margin={3} />
      <SSButton
        variant={'red'}
        onPress={() => (typeEdit === true ? editAddress() : addAddress())}
        text={typeEdit === true ? t('Address.submit') : 'Add'}
      />
    </SafeAreaView>
  );
};

export default EditAddressScreen;
