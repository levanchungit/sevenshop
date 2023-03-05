import React, { useState } from 'react';
import { Box, Text, Flex, Switch } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
import SSButton from 'components/SSButton';

const EditAddressScreen = () => {
  const [isDefault, setIsDefault] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 10,
        backgroundColor: 'white',
      }}
    >
      <Flex direction="row" alignItems="center" margin={6}>
        <Text fontSize={24} w="50%">
          Address type
        </Text>
        <Flex direction="row" justifyContent="center" alignItems="center" w="25%">
          <IconCheck isChecked={true} />
          <Text fontSize={24} marginX={3}>
            Home
          </Text>
        </Flex>
        <Flex direction="row" justifyContent="center" alignItems="center" w="25%">
          <IconCheck isChecked={false} />
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
