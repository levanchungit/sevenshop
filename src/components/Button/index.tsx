import React from 'react';
import { Text, Pressable, View } from 'react-native';
import styles from './styles';

type Props = {
  onPress: Function;
  title: string;
  style: object;
};

const Button = (props: Props) => {
  const { onPress, title, style } = props;
  return (
    <View style={styles.coverButton}>
      <Pressable onPress={() => onPress()} style={[styles.button, style]}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
