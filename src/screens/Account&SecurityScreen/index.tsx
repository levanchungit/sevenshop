import React from 'react';
import { Text, View, Button, Image } from 'native-base';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

const AccountSecurityScreen = () => {
  return (
    <View py={10} backgroundColor={'white'} h={'100%'}>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={true}
        titleHeaderSearch="Your Favorites"
        iconSearchEnabled={true}
        iconOther={false}
        titleHeaderScreen="Account & Security"
        iconRightHeaderScreen={false}
        quantityItems={12}
      />

      <View h={'70%'} px={3}>
        <View alignItems={'center'} justifyContent={'center'} h={'30%'}>
          <Image
            alt="Image OTP"
            w={100}
            h={100}
            borderRadius={'full'}
            source={{
              uri: 'https://th.bing.com/th/id/R.07236489f54f5a6f91ede61a5b805da6?rik=m7AJs7zCdXB2Bg&pid=ImgRaw&r=0',
            }}
          />
        </View>
        <View h={'60%'} justifyContent={'space-between'}>
          <View h={'10%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>Username</Text>
              <Text variant={'body1'}>sevenshop</Text>
            </View>
          </View>

          <View h={'10%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>Phone</Text>
              <Text variant={'body1'}>0378484047</Text>
            </View>
          </View>

          <View h={'10%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>Email</Text>
              <Text variant={'body1'}>sevenshop@gmail.com</Text>
            </View>
          </View>

          <View h={'10%'} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <View
              px={3}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              <Text variant={'body1'}>Birthday</Text>
              <Text variant={'body1'}>08-08-2003</Text>
            </View>
          </View>
        </View>
        <View mt={5}>
          <Button width={'100%'}>
            <Text fontSize={14} color="light.100" fontWeight={'bold'}>
              Confirm
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default AccountSecurityScreen;
