import React, { useState } from 'react';
import {
  CardField,
  // ,   StripeProvider
} from '@stripe/stripe-react-native';
import { Box, Flex, Text, Image, Modal, Button, View } from 'native-base';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

// type Props = {
//   data: [];
// };
const PaymentMethodScreen = () => {
  // const { data } = props;
  const [modalVisible, setModalVisible] = useState(false);

  // Handle form submission
  // const handlePayPress = async () => {
  //   try {
  //     // Create a token with the card information
  //     const token = await StripeProvider.createTokenWithCard({
  //       number: 123,
  //       expMonth: 12,
  //       expYear: 12,
  //       cvc: 12,
  //     });

  //     // Send the token to your server for processing
  //     const response = await fetch('https://yourserver.com/process_payment', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         stripeToken: token.tokenId,
  //       }),
  //     });

  //     if (response.ok) {
  //       // Payment processed successfully
  //       alert('Payment processed!');
  //     } else {
  //       // Payment failed
  //       alert('Payment failed.');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert('Payment failed.');
  //   }
  // };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
      }}
    >
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        w="100%"
        h="100%"
        alignItems={'center'}
        justifyContent="center"
      >
        <View w="80%" h={300} backgroundColor="white" alignItems={'center'} justifyContent="center">
          <Button
            h={30}
            w={30}
            ml={'75%'}
            mb={25}
            backgroundColor="primary.500"
            variant="ghost"
            colorScheme="blueGray"
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Icon.X stroke={'white'} fontSize={24} />
          </Button>
          <Text fontFamily={'Raleway_700Bold'} fontSize={20} textTransform="uppercase">
            Stripe Payment
          </Text>
          <CardField
            postalCodeEnabled={true}
            placeholders={{
              number: '4242 4242 4242 4242',
            }}
            cardStyle={{
              backgroundColor: '#FFFFFF',
              textColor: '#000000',
            }}
            style={{
              width: '100%',
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails: any) => {
              console.log('cardDetails', cardDetails);
            }}
            onFocus={(focusedField: any) => {
              console.log('focusField', focusedField);
            }}
          />
          <Button w={200} onPress={null}>
            Submit Payment
          </Button>
        </View>
      </Modal>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={false}
        titleHeaderSearchEnabled={false}
        iconSearchEnabled={false}
        iconOther={false}
        titleHeaderSearch={''}
        titleHeaderScreen={'Payment method'}
        iconRightHeaderScreen={false}
        quantityItems={0}
        iconRightHeaderCart={false}
      />
      <Box marginBottom={3} />

      <Flex
        w="100%"
        direction="row"
        padding={3}
        borderBottomWidth={1}
        borderBottomColor="#C9C9C9"
        marginBottom={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Icon.DollarSign stroke="black" width={24} />
        <Text
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
          width="80%"
          marginLeft={3}
        >
          Cash on delivery
        </Text>
        <IconCheck isChecked={false} />
      </Flex>

      <Flex
        w="100%"
        direction="row"
        padding={3}
        borderBottomWidth={1}
        borderBottomColor="#C9C9C9"
        marginBottom={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Icon.CreditCard stroke="black" width={24} />
        <Text
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
          width="80%"
          marginLeft={3}
        >
          Credit card
        </Text>
        <Icon.ChevronRight stroke="black" onPress={() => setModalVisible(true)} />
      </Flex>

      <Flex
        w="100%"
        direction="row"
        padding={3}
        borderBottomWidth={1}
        borderBottomColor="#C9C9C9"
        marginBottom={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Image
          source={{
            uri: 'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1678542086/MoMo_Logo_mlifmt.png',
          }}
          alt="Icon"
          size="full"
          w={6}
          h={6}
        />
        <Text
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
          width="80%"
          marginLeft={5}
        >
          MoMo E-Wallet
        </Text>
        <Icon.ChevronRight stroke="black" width="10%" />
      </Flex>
    </SafeAreaView>
  );
};

export default PaymentMethodScreen;
