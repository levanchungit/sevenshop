import { Box, FlatList, HStack, Skeleton, VStack, Text } from 'native-base';
import ItemNotYetRated from 'components/ItemNotYetRated';
import { INotYetRated } from 'interfaces/Rating';

type Props = {
  ratings: INotYetRated[];
  isLoading: boolean;
};

const FlatListNotYetRated = (props: Props) => {
  const { ratings, isLoading } = props;
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
  } else if (ratings.length === 0) {
    return (
      <Text variant="title" alignSelf="center">
        No comment yet
      </Text>
    );
  } else {
    return (
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={ratings}
        numColumns={2}
        renderItem={({ item }: { item: INotYetRated }) => <ItemNotYetRated product={item} />}
      />
    );
  }
};

export default FlatListNotYetRated;
