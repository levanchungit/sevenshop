import React from 'react';
import { View, Text, Image, Pressable } from 'native-base';

type Props = {
  title: string;
  details: string;
  date: string;
  onPress: any;
};

const SSItemNotification = (props: Props) => {
  const { title, details, date, onPress } = props;
  return (
    <Pressable
      marginY={2}
      padding={3}
      w="100%"
      borderBottomColor={'black'}
      borderBottomWidth={0.5}
      onPress={onPress()}
    >
      <View flexDirection={'row'}>
        <View
          w={41}
          h={41}
          backgroundColor="primary.600"
          alignItems={'center'}
          justifyContent="center"
          borderRadius={50}
          mr={7}
        >
          <Image
            alt="sevenshop!"
            source={{
              uri: 'https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678356026/sevenshop/Vector_ivwyho.png',
            }}
            w={6}
            h={5}
          />
        </View>
        <View w={'75%'}>
          <Text fontSize={18} variant={'Subtitle1'} fontFamily="Raleway_700Bold">
            {title}
          </Text>
          <Text numberOfLines={2} textAlign="justify">
            {details}
          </Text>
        </View>
      </View>
      <View w={'100%'}>
        <Text
          w={'100%'}
          textAlign={'right'}
          fontSize={16}
          variant={'Body2'}
          fontFamily="Raleway_500Medium"
        >
          {date}
        </Text>
      </View>
    </Pressable>
  );
};

export default SSItemNotification;
