import { Box, Flex, Image, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';

type Props = {
  voucher: {
    id: number;
    name: string;
    description: string;
    time: string;
    image: string;
    condition: string;
  };
};

const ItemVoucher = (props: Props) => {
  const { t } = useTranslation();
  const { voucher } = props;
  return (
    <Flex
      direction="row"
      justifyContent="center"
      alignItems="center"
      w="100%"
      padding={3}
      marginBottom={3}
      borderWidth={1}
      borderColor="#C9C9C9"
      borderRadius={10}
    >
      <Image
        source={{
          uri: voucher.image,
        }}
        alt="Voucher Image"
        size="full"
        shadow="9"
        alignSelf="center"
        w="20%"
        h="100%"
      />
      <Box w="5%" />
      <Box w="75%" justifyContent="space-evenly">
        <Text
          variant="title"
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {voucher.name}
        </Text>
        <Text
          variant="body1"
          numberOfLines={1}
          marginBottom={2}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {voucher.description}
        </Text>
        <Flex direction="row" justifyContent="space-between">
          <Flex direction="row" alignItems="center">
            <Icon.Clock stroke="#AC1506" strokeWidth={2} width={12} height={12} />
            <Text
              variant="overline"
              color="primary.600"
              marginLeft={1}
              style={{
                fontVariant: ['lining-nums'],
              }}
            >
              {t('SelectVoucher.effective')} {voucher.time}
            </Text>
          </Flex>
          <Text
            variant="overline"
            color="#0C32F9"
            marginLeft={1}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            {t('SelectVoucher.condition')}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ItemVoucher;
