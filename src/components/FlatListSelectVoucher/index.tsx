import { Box, FlatList, HStack, Skeleton, VStack, Text } from 'native-base';
import ItemSelectVoucher from 'components/ItemSelectVoucher';
import { IVoucher } from 'interfaces/Voucher';

type Props = {
  vouchers: IVoucher[];
  isLoading: boolean;
  selectVoucher: string;
  setSelectVoucher: Function;
};

const FlatListSelectVoucher = (props: Props) => {
  const { vouchers, isLoading, selectVoucher, setSelectVoucher } = props;
  if (isLoading) {
    return (
      <VStack>
        <Box p={3} marginBottom={2}>
          <HStack mb={3}>
            <Skeleton rounded="full" size={50} mr={3} />
            <Skeleton borderRadius={10} w="50%" h={6} />
          </HStack>
          <Skeleton.Text lines={4} mb={3} />
        </Box>
      </VStack>
    );
  } else if (vouchers.length === 0) {
    return (
      <Text variant="title" alignSelf="center">
        No comment yet
      </Text>
    );
  } else {
    return (
      <FlatList
        extraData={vouchers}
        data={vouchers}
        renderItem={({ item }) => (
          <ItemSelectVoucher
            voucher={item}
            selected={selectVoucher === item._id}
            onSelect={setSelectVoucher}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    );
  }
};

export default FlatListSelectVoucher;
