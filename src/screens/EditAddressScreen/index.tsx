import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, Flex, Switch, Pressable, Toast } from 'native-base';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
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
  const { typeEdit, address } = props.route.params;
  const [isDefault, setIsDefault] = useState<boolean>(!address ? false : address?.default_address);
  const [selectedType, setSelectedType] = useState<string>('');
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
    // type: selectedType,
    default_address: isDefault,
  };
  const addAddress = async () => {
    try {
      console.log(data);
      await addressAPI.addAddress(data);
      Toast.show({
        title: 'Successfully added address',
        placement: 'top',
      });
      navigation.goBack();
    } catch (error: any) {
      Toast.show({
        title: 'Cannot add address',
        description: error.message,
        placement: 'top',
      });
    }
  };
  const editAddress = async () => {
    try {
      console.log(data, _id);
      await addressAPI.editAddress(data, _id);
      Toast.show({
        title: 'Successfully update address',
        placement: 'top',
      });
      navigation.goBack();
    } catch (error: any) {
      Toast.show({
        title: 'Cannot update address',
        description: error.message,
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
        titleHeaderScreen={typeEdit === true ? 'Edit address' : 'Add address'}
        iconRightHeaderScreen={false}
        quantityItems={0}
        iconRightHeaderCart={false}
        quantityHeaderCarts={0}
      />

      <SSTextInput
        placeholder={'Enter the recipient’s name'}
        typePassword={false}
        inputLeftElement={<Icon.User strokeWidth={1} stroke={'black'} />}
        value={name === undefined ? '' : name}
        changeValue={setName}
        width="100%"
      />

      <SSTextInput
        placeholder={'Enter the recipient’s phone number'}
        typePassword={false}
        inputLeftElement={<Icon.Phone strokeWidth={1} stroke={'black'} />}
        value={phone === undefined ? '' : phone.toString()}
        changeValue={setPhone}
        width="100%"
        keyboardType={'numeric'}
      />

      <SSTextInput
        placeholder={'Enter the address'}
        typePassword={false}
        inputLeftElement={<Icon.MapPin strokeWidth={1} stroke={'black'} />}
        value={addressDescription === undefined ? '' : addressDescription}
        changeValue={setAddressDescription}
        width="100%"
      />

      <Box width={'100%'} margin={3} />

      <Flex direction="row" alignItems="center" p={3}>
        <Text variant={'body1'} w="50%">
          Address type
        </Text>
        <Flex direction="row" justifyContent="center" alignItems="center" w="25%">
          <Pressable onPress={() => setSelectedType('home')}>
            <IconCheck isChecked={selectedType === 'home'} />
          </Pressable>
          <Text variant={'body1'} marginLeft={3}>
            Home
          </Text>
        </Flex>
        <Flex direction="row" justifyContent="center" alignItems="center" w="25%">
          <Pressable onPress={() => setSelectedType('work')}>
            <IconCheck isChecked={selectedType === 'work'} />
          </Pressable>
          <Text variant={'body1'} marginLeft={3}>
            Work
          </Text>
        </Flex>
      </Flex>

      <Flex direction="row" alignItems="center" p={3} justifyContent="space-between">
        <Text variant={'body1'} w="50%">
          Set address default
        </Text>
        <Switch size="lg" onToggle={() => setIsDefault(!isDefault)} isChecked={isDefault} />
      </Flex>

      <SSButton
        variant={'white'}
        text={typeEdit === true ? 'Delete' : 'Cancel'}
        onPress={() => console.log(typeEdit === true ? 'Delete' : 'Cancel')}
      />
      <Box width={'100%'} margin={3} />
      <SSButton
        variant={'red'}
        text={typeEdit === true ? 'Submit' : 'Add'}
        onPress={() => (typeEdit === true ? editAddress() : addAddress())}
      />
    </SafeAreaView>
  );
};

export default EditAddressScreen;
