import { useState } from 'react';
import { Box, Flex, Text } from 'native-base';
import * as Icon from 'react-native-feather';
import IconCheck from 'components/IconCheck';

type Props = {
  name: string;
  phone: number;
  address: string;
  isDefault: boolean;
  checked: boolean;
};

const ItemAdrress = (props: Props) => {
  const { name, phone, address, isDefault, checked } = props;
  const [elementVisible] = useState(isDefault);
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      paddingY={5}
      w="100%"
      height={150}
      marginBottom={2}
      borderWidth={1}
      borderColor="#C9C9C9"
      borderRadius={10}
    >
      <Box justifyContent="center" alignItems="center" h="100%" w="10%">
        <IconCheck boolean={checked} width={35} height={35} />
      </Box>
      <Box w="80%">
        <Text variant="h4">
          {name} | {phone}
        </Text>
        <Text variant="h4">{address}</Text>
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
      <Box justifyContent="center" alignItems="center" h="100%" w="10%">
        <Icon.Edit2 stroke="#AC1506" width="35" height="35" />
      </Box>
    </Flex>
  );
};

export default ItemAdrress;
