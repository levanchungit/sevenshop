import { Box, FlatList, Skeleton, VStack } from 'native-base';
import ItemAdrress from 'components/ItemAddress';
import { AddressesResult } from 'interfaces/Address';

type Props = {
  address: AddressesResult[];
  mutate: Function;
  isLoading: boolean;
  checkId: string;
  setCheckId: Function;
};

const FlatListUserAddress = (props: Props) => {
  const { address, isLoading, checkId, setCheckId, mutate } = props;
  if (isLoading) {
    return (
      <VStack>
        <Box p={3} marginBottom={2} borderWidth={1} borderColor="#C9C9C9" borderRadius={10}>
          <Skeleton.Text lines={1} w="50%" />
          <Box mb={3} />
          <Skeleton.Text lines={1} />
          <Box mb={3} />
          <Skeleton borderRadius={3} w={90} />
        </Box>
        <Box p={3} marginBottom={2} borderWidth={1} borderColor="#C9C9C9" borderRadius={10}>
          <Skeleton.Text lines={1} w="50%" />
          <Box mb={3} />
          <Skeleton.Text lines={1} />
          <Box mb={3} />
          <Skeleton borderRadius={3} w={90} />
        </Box>
        <Box p={3} marginBottom={2} borderWidth={1} borderColor="#C9C9C9" borderRadius={10}>
          <Skeleton.Text lines={1} w="50%" />
          <Box mb={3} />
          <Skeleton.Text lines={1} />
          <Box mb={3} />
          <Skeleton borderRadius={3} w={90} />
        </Box>
        <Box p={3} marginBottom={2} borderWidth={1} borderColor="#C9C9C9" borderRadius={10}>
          <Skeleton.Text lines={1} w="50%" />
          <Box mb={3} />
          <Skeleton.Text lines={1} />
          <Box mb={3} />
          <Skeleton borderRadius={3} w={100} />
        </Box>
      </VStack>
    );
  } else {
    return (
      <FlatList
        extraData={address}
        showsVerticalScrollIndicator={false}
        data={address}
        renderItem={({ item }: { item: AddressesResult }) => (
          <ItemAdrress address={item} check={checkId} setCheck={setCheckId} mutate={mutate} />
        )}
        keyExtractor={(item) => item._id}
      />
    );
  }
};

export default FlatListUserAddress;
