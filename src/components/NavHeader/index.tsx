import React from 'react';
import { View, Text } from 'native-base';
import * as Icon from 'react-native-feather';

type Props = {
  title: string;
};

const NavHeader = (props: Props) => {
  const { title } = props;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
      <Icon.ChevronLeft stroke={'black'} width={24} height={24} />
      <Text variant={'title'} style={{ marginLeft: 12 }}>
        {title}
      </Text>
    </View>
  );
};

export default NavHeader;
