import { FlatList, HStack, Skeleton, VStack, Text } from 'native-base';
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
      <HStack flex={1} justifyContent="space-between">
        <VStack mb={3} p={3} w="48%" alignItems="center">
          <Skeleton w="100%" h={100} mb={3} />
          <Skeleton.Text />
        </VStack>
        <VStack mb={3} p={3} w="48%" alignItems="center">
          <Skeleton w="100%" h={100} mb={3} />
          <Skeleton.Text />
        </VStack>
      </HStack>
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
