import React, { useState } from 'react';
import { Box, Text, Flex, Switch, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import SSTextInput from 'components/SSTextInput';

const EditAddressScreen = () => {
  const [isDefault, setIsDefault] = useState(false);
  const [selectedType, setSelectedType] = useState('work');
  const [name, setName] = useState('');
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
        titleHeaderScreen={'Edit'}
        iconRightHeaderScreen={false}
        quantityItems={0}
      />

      <SSTextInput
        placeholder={'Enter the recipient’s name'}
        type={''}
        inputLeftElement={<Icon.User strokeWidth={1} stroke={'black'} />}
        setEyes={false}
        value={name}
        changeValue={setName}
      />

      <SSTextInput
        placeholder={'Enter the recipient’s phone number'}
        type={''}
        inputLeftElement={<Icon.Phone strokeWidth={1} stroke={'black'} />}
        setEyes={false}
        value={name}
        changeValue={setName}
      />

      <SSTextInput
        placeholder={'Enter the address'}
        type={''}
        inputLeftElement={<Icon.MapPin strokeWidth={1} stroke={'black'} />}
        setEyes={false}
        value={name}
        changeValue={setName}
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

      <SSButton variant={'white'} text={'Cancle'} />
      <Box width={'100%'} margin={3} />
      <SSButton variant={'red'} text={'Add'} />
    </SafeAreaView>
  );
};

export default EditAddressScreen;
