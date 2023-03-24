import React from 'react';
import { Box, Flex, Text, Image } from 'native-base';
import * as Icon from 'react-native-feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import IconCheck from 'components/IconCheck';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

const PaymentMethodScreen = () => {
  // const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: 'white',
      }}
    >
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
        quantityHeaderCarts={0}
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
        <Icon.ChevronRight stroke="black" />
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
