import React, { useState } from 'react';
import { View, Pressable, Input } from 'native-base';
import * as Icon from 'react-native-feather';
type Props = {
  placeholder: string;
  typePassword: boolean;
  inputLeftElement?: JSX.Element;
  inputRightElement?: JSX.Element;
  value: string;
  width?: any;
  keyboardType?: any;
  changeValue: Function;
};

const SSTextInput = (props: Props) => {
  const [showPass, setShowPass] = useState(true);
  const {
    placeholder,
    value,
    changeValue,
    inputLeftElement,
    inputRightElement,
    typePassword,
    keyboardType,
    width,
  } = props;
  return (
    <View
      flexDirection="row"
      w={width ? width : '80%'}
      alignItems="center"
      alignSelf="center"
      borderBottomWidth={1}
      px={4}
      mt={5}
    >
      <Input
        style={{
          fontVariant: ['lining-nums'],
        }}
        keyboardType={keyboardType ? keyboardType : 'default'}
        autoCapitalize="none"
        fontSize={16}
        fontFamily="heading"
        fontStyle="normal"
        w={{ base: '100%' }}
        variant="unstyled"
        secureTextEntry={typePassword === true ? showPass : false}
        InputRightElement={
          typePassword === true ? (
            <Pressable
              onPress={() => {
                setShowPass(!showPass);
              }}
            >
              {showPass ? (
                <Icon.Eye stroke="grey" width={24} height={24} />
              ) : (
                <Icon.EyeOff stroke="grey" width={24} height={24} />
              )}
            </Pressable>
          ) : (
            inputRightElement
          )
        }
        InputLeftElement={inputLeftElement}
        placeholder={placeholder}
        value={value}
        onChangeText={(value) => changeValue(value)}
      />
    </View>
  );
};

export default SSTextInput;
