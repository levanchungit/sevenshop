import React from 'react';
import { View, Text } from 'native-base';

type Props = {
  title: string;
  iconLeft: any;
  iconRight: any;
  style: object;
};

const SelectOptions = (props: Props) => {
  const { title, iconLeft, iconRight, style } = props;
  return (
    <View style={style}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 12,
          paddingHorizontal: 12,
          paddingBottom: 8,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}
        borderBottomColor="gray.400"
      >
        <View flexDirection={'row'} alignItems={'center'}>
          {iconLeft}
          <Text variant={'Button'} ml={3} fontFamily="Raleway_500Medium">
            {title}
          </Text>
        </View>
        {iconRight}
      </View>
    </View>
  );
};

export default SelectOptions;
