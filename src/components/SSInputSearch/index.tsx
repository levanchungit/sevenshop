import React from 'react';
import { Input, View } from 'native-base';
import * as Icon from 'react-native-feather';
type Props = {
  placeholder: string;
  inputRightElement?: JSX.Element;
  value: string;
  changeValue: Function;
};

const SSInputSearch = (props: Props) => {
  const { placeholder, value, changeValue, inputRightElement } = props;
  return (
    <View flexDirection="row">
      <View w="10%" justifyContent={'center'} alignItems={'center'} mt={5}>
        <Icon.ChevronLeft stroke="black" width={24} height={24} />
      </View>
      <View
        flexDirection="row"
        w="90%"
        alignItems="center"
        backgroundColor={'primary.600'}
        px={2}
        mt={5}
        borderRadius={7}
      >
        <Input
          autoFocus={true}
          autoCapitalize="none"
          fontSize={16}
          fontFamily="heading"
          fontStyle="normal"
          w={{ base: '100%' }}
          variant="unstyled"
          color={'white'}
          placeholderTextColor={'white'}
          InputRightElement={inputRightElement}
          placeholder={placeholder}
          value={value}
          onChangeText={(value) => changeValue(value)}
        />
      </View>
    </View>
  );
};

export default SSInputSearch;
