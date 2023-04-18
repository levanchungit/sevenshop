import { Box, Flex, Image, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import { IVoucher } from 'interfaces/Voucher';

type Props = {
  voucher: IVoucher;
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
          uri: 'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1681803278/Image/Logo_Typography_Small_w7ak1d.png',
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
              {t('SelectVoucher.effective')} {voucher.start_date} - {voucher.end_date}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ItemVoucher;
