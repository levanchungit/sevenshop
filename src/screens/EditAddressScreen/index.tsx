import React, { useState } from 'react';
import { Box, Text, Flex, Switch, Pressable } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
import SSButton from 'components/SSButton';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

const EditAddressScreen = () => {
  const [isDefault, setIsDefault] = useState(false);
  const [selectedType, setSelectedType] = useState('work');
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

      <Flex direction="row" alignItems="center" margin={6}>
        <Text fontSize={24} w="50%">
          Address type
        </Text>
        <Flex direction="row" justifyContent="center" alignItems="center" w="25%">
          <Pressable onPress={() => setSelectedType('home')}>
            <IconCheck isChecked={selectedType === 'home'} />
          </Pressable>
          <Text fontSize={24} marginX={3}>
            Home
          </Text>
        </Flex>
        <Flex direction="row" justifyContent="center" alignItems="center" w="25%">
          <Pressable onPress={() => setSelectedType('work')}>
            <IconCheck isChecked={selectedType === 'work'} />
          </Pressable>
          <Text fontSize={24} marginX={3}>
            Work
          </Text>
        </Flex>
      </Flex>

      <Flex
        direction="row"
        alignItems="center"
        marginX={6}
        marginTop={6}
        marginBottom={12}
        justifyContent="space-between"
      >
        <Text fontSize={24} w="50%">
          Set address default
        </Text>
        <Switch size="lg" onToggle={() => setIsDefault(!isDefault)} isChecked={isDefault} />
      </Flex>

      <SSButton variant={'white'} text={'Cancle'} />
      <Box width={'100%'} margin={6} />
      <SSButton variant={'red'} text={'Add'} />
    </SafeAreaView>
  );
};

export default EditAddressScreen;
