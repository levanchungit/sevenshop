import { Box, Flex, Image, Pressable, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import * as Icon from 'react-native-feather';
import IconCheck from 'components/IconCheck';

type Props = {
  voucher: {
    id: number;
    name: string;
    description: string;
    time: string;
    image: string;
    condition: string;
  };
  selected: boolean;
  onSelect: Function;
};

const ItemSelectVoucher = (props: Props, handleChange: boolean) => {
  const { t } = useTranslation();
  const { voucher, selected, onSelect } = props;
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
        minHeight={81}
      />

      <Box w="5%" />

      <Flex w="75%" justifyContent="space-between">
        <Flex direction="row" justifyContent="space-between">
          <Text
            variant="title"
            numberOfLines={1}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            {voucher.name}
          </Text>
          <Pressable onPress={() => onSelect}>
            {selected ? <IconCheck isChecked={true} /> : <IconCheck isChecked={false} />}
          </Pressable>
        </Flex>
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
      </Flex>
    </Flex>
  );
};

export default ItemSelectVoucher;
