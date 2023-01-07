import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

type Props = {
  placeholder: string;
  style: object;
};
const TextInputGlobal = (props: Props) => {
  const { placeholder, style } = props;
  return (
    <View>
      <TextInput style={[styles.textInput, style]} placeholder={placeholder}></TextInput>
    </View>
  );
};

export default TextInputGlobal;
