import { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Pressable, Text } from 'native-base';
import * as Icon from 'react-native-feather';
import IconCheck from 'components/IconCheck';
import { AddressesResult } from 'interfaces/Address';
import { AppNavigationProp } from 'providers/navigation/types';
import { CheckoutContext } from 'screens/CheckoutScreen/CheckoutContext';

type Props = {
  address: AddressesResult;
  check: string;
  setCheck: Function;
};

const ItemAdrress = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { address, check, setCheck } = props;
  const [elementVisible] = useState<boolean>(address.default_address);
  const { addresses } = useContext(CheckoutContext);

  useEffect(() => {
    if (addresses._id) {
      setCheck(addresses._id);
    } else {
      if (address.default_address) {
        setCheck(address._id);
      }
    }
  }, []);

  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      minH={100}
      marginBottom={2}
      borderWidth={1}
      borderColor="#C9C9C9"
      borderRadius={10}
    >
      <Pressable
        justifyContent="center"
        alignItems="center"
        w="10%"
        onPress={() => setCheck(address._id)}
      >
        {address._id === check ? <IconCheck isChecked={true} /> : <IconCheck isChecked={false} />}
      </Pressable>
      <Box w="80%">
        <Text
          numberOfLines={1}
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {address.full_name} | {address.phone}
        </Text>
        <Text
          numberOfLines={2}
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {address.address}
        </Text>
        {elementVisible ? (
          <Text
            borderColor="red.600"
            borderRadius={5}
            borderWidth={1}
            marginY={2}
            textAlign="center"
            w={100}
            padding={1}
            color="red.600"
            variant="subtitle2"
          >
            Default
          </Text>
        ) : null}
      </Box>
      <Pressable
        justifyContent="center"
        alignItems="center"
        w="10%"
        onPress={() => navigation.navigate('EditAddress', { typeEdit: true, address })}
      >
        <Icon.Edit2 stroke="#AC1506" width={26} height={26} />
      </Pressable>
    </HStack>
  );
};

export default ItemAdrress;
