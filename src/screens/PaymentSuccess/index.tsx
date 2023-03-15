import React from 'react';
import { Image, Text, View, Pressable } from 'native-base';

const PaymentSuccess = () => {
  return (
    <View bgColor={'white'} flex={1}>
      <View mt={7}>
        <View mt={50} alignItems="center">
          <Image
            alt="123"
            w={100}
            h={100}
            source={require('../../assets/images/paymentsuccess.png')}
          />
          <Text variant={'Title'} fontWeight="bold" fontSize={20} mt={3} mb={7} color="black">
            Successful payment
          </Text>
        </View>

        <View padding={3} borderRadius={6} borderWidth={0.4} m={3} borderColor="gray.500">
          <View>
            <View flexDirection={'row'} justifyContent="space-between" mb={2}>
              <Text
                variant={'Body1'}
                fontSize={16}
                fontWeight="medium"
                color={'black'}
                fontFamily="Raleway_500Medium"
              >
                Payment time
              </Text>
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                variant={'Body1'}
                fontSize={16}
                fontWeight="medium"
                color={'black'}
                fontFamily="Raleway_500Medium"
              >
                21:41 - 13/02/2023
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" mb={2}>
              <Text variant={'Body1'} fontSize={16} color={'black'} fontFamily="Raleway_500Medium">
                Trading code
              </Text>
              <Text
                style={{
                  fontVariant: ['lining-nums'],
                }}
                variant={'Body1'}
                fontSize={16}
                color={'primary.600'}
              >
                #0945943
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" color={'black'} mb={3}>
              <Text
                variant={'Body1'}
                fontSize={16}
                fontWeight="extraBlack"
                fontFamily="Raleway_500Medium"
              >
                Paid by
              </Text>
              <Text variant={'Body1'} fontSize={16} color={'black'} fontFamily="Raleway_500Medium">
                MoMo E-Wallet
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" color={'black'}>
              <Text variant={'Body1'} fontSize={12} w={'60%'} fontFamily="Raleway_500Medium">
                For more details on the status of your order please select{' '}
                <Text fontWeight={'extrabold'} fontSize={14} fontFamily="Raleway_700Bold">
                  Profile
                </Text>{' '}
                or click to{' '}
                <Text
                  fontSize={14}
                  fontWeight={'extrabold'}
                  lineHeight={19}
                  fontFamily="Raleway_700Bold"
                >
                  View Orders
                </Text>
              </Text>
              <Pressable
                style={{
                  borderWidth: 0.4,
                  width: 150,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: 6,
                  height: 45,
                  marginTop: 8,
                  borderColor: 'gray',
                }}
              >
                <Text
                  variant={'Button'}
                  fontFamily="Raleway_700Bold"
                  fontSize={16}
                  color={'primary.600'}
                >
                  View orders
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View mt={5}>
          <Text variant={'Caption'} textAlign="center" fontSize={12} fontFamily="Raleway_500Medium">
            SevenShop thank you for choosing us.
          </Text>
          <Text variant={'Caption'} textAlign="center" fontSize={12} fontFamily="Raleway_500Medium">
            Hope you will have a great experience when using our products/services.
          </Text>
          <Text variant={'Caption'} textAlign="center" fontSize={12} fontFamily="Raleway_500Medium">
            We look forward to your continued support in the future.
          </Text>
        </View>
      </View>

      <View alignItems={'center'}>
        <Pressable
          style={{
            marginTop: 50,
            borderWidth: 0.4,
            width: '90%',
            borderRadius: 6,
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 6,
            height: 50,
            borderColor: 'gray',
          }}
          backgroundColor={'primary.600'}
        >
          <Text variant={'Button'} fontFamily="Raleway_700Bold" fontSize={16} color={'white'}>
            Keep Shopping
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PaymentSuccess;
