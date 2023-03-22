import React from 'react';
import { View, Text, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import styles from './styles';

type Props = {
  onPress: Function;
  title: string;
  isSelected: boolean;
};

const ButtonCategory = (props: Props) => {
  const { onPress, title, isSelected } = props;
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={() => onPress()}
        style={[styles.ButtonTabOpacity, isSelected === true ? null : null]}
      >
        <Text
          numberOfLines={1}
          fontSize={'md'}
          style={[
            { fontVariant: ['lining-nums'] },
            isSelected === true ? styles.textColorSelected : null,
          ]}
        >
          {title}
        </Text>
      </Pressable>
      <Icon.Octagon fill="#000000" width={7} height={7} />
    </View>
  );
};

export default ButtonCategory;
