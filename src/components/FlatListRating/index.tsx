import { Box, FlatList, HStack, Skeleton, VStack, Text } from 'native-base';
import ItemRating from 'components/ItemRating';
import { IRating, IRatingByProductId } from 'interfaces/Rating';

type Props = {
  ratings: IRatingByProductId;
  isLoading: boolean;
};

const FlatListRating = (props: Props) => {
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
        <Box p={3} marginBottom={2}>
          <HStack mb={3}>
            <Skeleton rounded="full" size={50} mr={3} />
            <Skeleton borderRadius={10} w="50%" h={6} />
          </HStack>
          <Skeleton.Text lines={4} mb={3} />
        </Box>
        <Box p={3} marginBottom={2}>
          <HStack mb={3}>
            <Skeleton rounded="full" size={50} mr={3} />
            <Skeleton borderRadius={10} w="50%" h={6} />
          </HStack>
          <Skeleton.Text lines={4} mb={3} />
        </Box>
      </VStack>
    );
  } else if (!isLoading && ratings.ratings.length === 0) {
    return <Text>No comment yet</Text>;
  } else {
    return (
      <FlatList
        data={ratings ? ratings.ratings : null}
        renderItem={({ item }: { item: IRating }) => <ItemRating rating={item} />}
        keyExtractor={(item) => item._id}
      />
    );
  }
};

export default FlatListRating;
