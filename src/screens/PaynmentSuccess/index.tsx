import React from 'react';
import { Image, Text, View, Pressable } from 'native-base';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

const PaymentSuccess = () => {
  return (
    <View bgColor={'white'} flex={1}>
      <View mt={7}>
        <SSHeaderNavigation
          tabHeaderSearchEnabled={false}
          titleHeaderSearchEnabled={false}
          iconSearchEnabled={false}
          iconOther={false}
          titleHeaderSearch={''}
          titleHeaderScreen={'Payment Success'}
          iconRightHeaderScreen={false}
          quantityItems={0}
        />

        <View mt={50} alignItems="center">
          <Image
            alt="123"
            w={100}
            h={100}
            source={require('../../assets/images/paymentsuccess.png')}
          />
          <Text variant={'Title'} fontWeight="bold" fontSize={20} mt={4} color="black">
            Successful payment
          </Text>
        </View>

        <View padding={3} borderRadius={6} borderWidth={0.4} m={3} borderColor="gray.500">
          <View>
            <View flexDirection={'row'} justifyContent="space-between" mb={2}>
              <Text variant={'Body1'} fontSize={16} fontWeight="medium" color={'black'}>
                Thời gian thanh toán
              </Text>
              <Text variant={'Body1'} fontSize={16} fontWeight="medium" color={'black'}>
                21:41 - 13/02/2023
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" mb={2}>
              <Text variant={'Body1'} fontSize={16} fontWeight="medium" color={'black'}>
                Mã giao dịch
              </Text>
              <Text variant={'Body1'} fontSize={16} fontWeight="medium" color={'primary.600'}>
                #0945943
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" color={'black'} mb={3}>
              <Text variant={'Body1'} fontSize={16} fontWeight="extraBlack">
                Paid by
              </Text>
              <Text variant={'Body1'} fontSize={16} fontWeight="medium" color={'black'}>
                MoMo E-Wallet
              </Text>
            </View>
            <View flexDirection={'row'} justifyContent="space-between" color={'black'}>
              <Text variant={'Body1'} fontSize={12} fontWeight="medium" w={'60%'}>
                For more details on the status of your order please select{' '}
                <Text fontWeight={'bold'} fontSize={14}>
                  Profile
                </Text>{' '}
                or click to <Text fontWeight={'bold'}>View Orders</Text>
              </Text>
              <Pressable
                style={{
                  borderWidth: 0.4,
                  width: 150,
                  borderRadius: 4,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingBottom: 6,
                  height: 50,
                  borderColor: 'gray',
                }}
              >
                <Text variant={'Button'} fontSize={16} fontWeight="bold" color={'primary.600'}>
                  View orders
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View mt={5}>
          <Text variant={'Caption'} textAlign="center" fontSize={12}>
            SevenShop thank you for choosing us.
          </Text>
          <Text variant={'Caption'} textAlign="center" fontSize={12}>
            Hope you will have a great experience when using our products/services.
          </Text>
          <Text variant={'Caption'} textAlign="center" fontSize={12}>
            We look forward to your continued support in the future.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentSuccess;
