import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Flex, Pressable, Text } from 'native-base';
import * as Icon from 'react-native-feather';
import IconCheck from 'components/IconCheck';
import { AppNavigationProp } from 'providers/navigation/types';

type Props = {
  name: string;
  phone: number;
  address: string;
  isDefault: boolean;
  check: number;
  setCheck: Function;
  dataId: number;
};

const ItemAdrress = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { name, phone, address, isDefault, dataId, check, setCheck } = props;
  const [elementVisible] = useState(isDefault);

  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      h={150}
      w="100%"
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
        onPress={() => setCheck(dataId)}
      >
        {dataId === check ? <IconCheck isChecked={true} /> : <IconCheck isChecked={false} />}
      </Pressable>
      <Box w="80%">
        <Text
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {name} | {phone}
        </Text>
        <Text
          variant={'body1'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {address}
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
        onPress={() => navigation.navigate('EditAddress')}
      >
        <Icon.Edit2 stroke="#AC1506" width={26} height={26} />
      </Pressable>
    </Flex>
  );
};

export default ItemAdrress;
