import React, { useState } from 'react';
import { Box, Text, Flex, Switch, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSTextInput from 'components/SSTextInput';
import { EditAddressRouteProp } from 'providers/navigation/types';

type EditAddressScreenProps = {
  route: EditAddressRouteProp;
};

const EditAddressScreen = (props: EditAddressScreenProps) => {
  const { typeEdit, address } = props.route.params;
  const [isDefault, setIsDefault] = useState(address?.isDefault);
  const [selectedType, setSelectedType] = useState(address?.type);
  const [name, setName] = useState(address?.full_name);
  const [phone, setPhone] = useState(address?.phone);
  const [addressDescription, setAddressDescription] = useState(address?.address);
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
      />

      <SSTextInput
        placeholder={'Enter the recipient’s phone number'}
        typePassword={false}
        inputLeftElement={<Icon.Phone strokeWidth={1} stroke={'black'} />}
        value={phone === undefined ? '' : phone.toString()}
        changeValue={setPhone}
      />

      <SSTextInput
        placeholder={'Enter the address'}
        typePassword={false}
        inputLeftElement={<Icon.MapPin strokeWidth={1} stroke={'black'} />}
        value={addressDescription === undefined ? '' : addressDescription}
        changeValue={setAddressDescription}
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
        text={typeEdit === true ? 'Delete' : 'Cancle'}
        onPress={() => console.log(typeEdit === true ? 'Delete' : 'Cancle')}
      />
      <Box width={'100%'} margin={3} />
      <SSButton
        variant={'red'}
        text={typeEdit === true ? 'Submit' : 'Add'}
        onPress={() => console.log(typeEdit === true ? 'Submit' : 'Add')}
      />
    </SafeAreaView>
  );
};

export default EditAddressScreen;
