import { Box, FlatList, HStack, Skeleton, VStack } from 'native-base';
import ItemRating from 'components/ItemRating';
import { IRating } from 'interfaces/Rating';

type Props = {
  ratings: IRating[];
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
  } else {
    return (
      <FlatList
        data={ratings}
        renderItem={({ item }: { item: IRating }) => <ItemRating rating={item} />}
      />
    );
  }
};

export default FlatListRating;
