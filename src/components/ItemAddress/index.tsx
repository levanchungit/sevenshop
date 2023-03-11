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
  type: string;
  dataId: number;
};

const ItemAdrress = (props: Props) => {
  const navigation = useNavigation<AppNavigationProp>();
  const { name, phone, address, isDefault, dataId, check, setCheck, type } = props;
  const [elementVisible] = useState(isDefault);

  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      h={[100, 150]}
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
        <Text variant={'h4'}>
          {name} | {phone}
        </Text>
        <Text variant={'h4'}>
          {type === 'home' ? (
            <Icon.Home stroke="black" strokeWidth={1} />
          ) : (
            <Icon.Briefcase stroke="black" strokeWidth={1} />
          )}
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
            <Text color="red.600" variant="body1">
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
        <Icon.Edit2 stroke="#AC1506" width="35" height="35" />
      </Pressable>
    </Flex>
  );
};

export default ItemAdrress;
