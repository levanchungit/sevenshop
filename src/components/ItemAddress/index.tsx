import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, HStack, Pressable, Text } from 'native-base';
import * as Icon from 'react-native-feather';
import IconCheck from 'components/IconCheck';
import { IAddresses } from 'interfaces/Address';
import { AppNavigationProp } from 'providers/navigation/types';

type Props = {
  address: IAddresses;
  check: string;
  setCheck: Function;
};

const ItemAdrress = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { address, check, setCheck } = props;
  const [elementVisible] = useState<boolean>(address.results.default_address);

  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      h={150}
      marginBottom={2}
      borderWidth={1}
      borderColor="#C9C9C9"
      borderRadius={10}
    >
      <Pressable
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="10%"
        onPress={() => setCheck(address.results._id)}
      >
        {address.results._id === check ? (
          <IconCheck isChecked={true} />
        ) : (
          <IconCheck isChecked={false} />
        )}
      </Pressable>
      <Box w="80%">
        <Text
          numberOfLines={1}
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {address.results.full_name} | {address.results.phone}
        </Text>
        <Text
          numberOfLines={2}
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {address.results.address}
        </Text>
        {elementVisible ? (
          <Box
            borderColor="red.600"
            borderRadius={5}
            borderWidth={1}
            marginY={2}
            justifyContent="center"
            alignItems="center"
            w="20%"
            padding={1}
          >
            <Text color="red.600" variant="subtitle2">
              Default
            </Text>
          </Box>
        ) : null}
      </Box>
      <Pressable
        justifyContent="center"
        alignItems="center"
        h="100%"
        w="10%"
        onPress={() =>
          navigation.navigate('EditAddress', { typeEdit: true, address: address.results })
        }
      >
        <Icon.Edit2 stroke="#AC1506" width={26} height={26} />
      </Pressable>
    </HStack>
  );
};

export default ItemAdrress;
