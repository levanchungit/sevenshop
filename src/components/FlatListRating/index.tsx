import { Box, FlatList, HStack, Skeleton, VStack, Text } from 'native-base';
import ItemRating from 'components/ItemRating';
import { IRating } from 'interfaces/Rating';

type Props = {
  ratings: IRating[];
  isLoading: boolean;
  showProduct: boolean;
  smallImage: boolean;
};

const FlatListRating = (props: Props) => {
  const { ratings, isLoading, showProduct, smallImage } = props;
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
        data={ratings}
        renderItem={({ item }: { item: IRating }) => (
          <ItemRating rating={item} showProduct={showProduct} smallImage={smallImage} />
        )}
      />
    );
  }
};

export default FlatListRating;
