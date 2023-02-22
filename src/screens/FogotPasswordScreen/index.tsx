import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, Input, Button } from 'native-base';
import * as Icon from 'react-native-feather';
import { AppNavigationProp } from 'providers/navigation/types';

type Props = object;

const ForgotPasswordScreen = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <View w={'100%'} h={'100%'} flex={1}>
      <Image
        w={'100%'}
        h={250}
        borderBottomLeftRadius={12}
        borderBottomRightRadius={12}
        source={{
          uri: 'https://th.bing.com/th/id/OIP.cH80uEpp8kXrYliDjpuk2AHaFh?pid=ImgDet&rs=1',
        }}
      />
      <Text
        mt="5"
        fontFamily={'heading'}
        fontStyle={'normal'}
        fontWeight={400}
        fontSize={36}
        textAlign={'center'}
      >
        Forgot Password
      </Text>

      <View h={200} alignItems={'center'}>
        <Text
          mt={7}
          w={'80%'}
          fontSize={16}
          fontWeight={500}
          fontFamily={'heading'}
          fontStyle={'normal'}
        >
          Please enter your email or phone number:
        </Text>
        <View
          flexDirection={'row'}
          w={'80%'}
          alignItems={'center'}
          borderBottomWidth={1}
          px={4}
          mt={5}
        >
          <Icon.Phone stroke="black" width={24} height={24} style={{ marginRight: 5 }} />
          <Input
            fontSize={16}
            fontFamily={'heading'}
            fontStyle={'normal'}
            w={{ base: '85%' }}
            variant="unstyled"
            placeholder="Enter your email/phone number"
          />
        </View>

        <Button
          onPress={() => {
            navigation.navigate('OTP');
          }}
          w={{ base: '50%' }}
          mb="1"
          mt="6"
          borderRadius={6}
        >
          <Text fontSize={14} color={'light.100'} fontWeight={'bold'}>
            Send
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;
