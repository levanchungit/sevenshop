import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

type Props = {
  onPress: Function;
  title: string;
  isSelected: boolean;
};

const Button = (props: Props) => {
  const { onPress, title, isSelected } = props;
  return (
    <View>
      <Pressable
        onPress={() => onPress()}
        style={[styles.ButtonTabOpacity, isSelected === true ? styles.backGroundButton : null]}
      >
        <Text style={isSelected === true ? styles.textColorSelected : null}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
