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
      marginY={2.5}
      padding={2.5}
      w="100%"
      borderBottomColor={'black'}
      borderBottomWidth={0.5}
      onPress={onPress()}
      alignItems="center"
    >
      <View flexDirection={'row'}>
        <View
          mt={3}
          w={10}
          h={10}
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
        <View w={'80%'}>
          <Text fontSize={18} variant={'Subtitle1'} fontFamily="Raleway_700Bold" mb={2.5}>
            {title}
          </Text>
          <Text
            style={{
              fontVariant: ['lining-nums'],
            }}
            numberOfLines={2}
            textAlign="justify"
            fontSize={14}
            fontFamily="Raleway_500Medium"
            mb={2.5}
          >
            {details}
          </Text>
        </View>
      </View>
      <View w={'100%'}>
        <Text
          style={{
            fontVariant: ['lining-nums'],
          }}
          w={'100%'}
          textAlign={'right'}
          fontSize={14}
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
