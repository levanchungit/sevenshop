import { useNavigation } from '@react-navigation/native';
import { FlatList, HStack, Skeleton, VStack } from 'native-base';
import ItemProductFlashSale from 'components/ItemProductFlashSale';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';

type Props = {
  products: IProduct[];
  isLoading: boolean;
};

const FlatListRecommendForYou = (props: Props) => {
  const { products, isLoading } = props;
  const navigation = useNavigation<AppNavigationProp>();
  if (isLoading) {
    return (
      <HStack>
        <VStack mr={3} w={100}>
          <Skeleton h={100} mb={3} />
          <Skeleton.Text lines={2} />
        </VStack>
        <VStack mr={3} w={100}>
          <Skeleton h={100} mb={3} />
          <Skeleton.Text lines={2} />
        </VStack>
        <VStack mr={3} w={100}>
          <Skeleton h={100} mb={3} />
          <Skeleton.Text lines={2} />
        </VStack>
        <VStack mr={3} w={100}>
          <Skeleton h={100} mb={3} />
          <Skeleton.Text lines={2} />
        </VStack>
      </HStack>
    );
  } else {
    return (
      <FlatList
        data={products}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({ item }: { item: IProduct }) => (
          <ItemProductFlashSale
            onPress={() => navigation.replace('Detail', { _id: item._id })}
            data={item}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    );
  }
};

export default FlatListRecommendForYou;
