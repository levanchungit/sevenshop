import React from 'react';
import { View, Text } from 'native-base';

type Props = {
  title: string;
  detail: string;
  style: object;
};

const SSItemFeeOrderDetail = (props: Props) => {
  const { title, detail, style } = props;
  return (
    <View flexDirection={'row'} justifyContent="space-between" alignItems={'center'} px={3} py={1}>
      <Text
        style={{
          fontVariant: ['lining-nums'],
        }}
        variant={'Subtitle2'}
        fontSize={14}
        fontFamily="Raleway_500Medium"
      >
        {title}
      </Text>
      <Text
        style={[{ fontVariant: ['lining-nums'] }, style]}
        variant={'Subtitle2'}
        fontSize={14}
        fontFamily="Raleway_500Medium"
      >
        {detail}
      </Text>
    </View>
  );
};

export default SSItemFeeOrderDetail;
