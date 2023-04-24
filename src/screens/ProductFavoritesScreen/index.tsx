import { View, FlatList } from 'native-base';
import ItemFavoritesProduct from 'components/ItemFavoritesProduct';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetFavoritesProducts from 'hook/product/useGetFavoritesProducts';
import { IProductFavorites } from 'interfaces/Product';

const ProductFavoritesScreen = () => {
  // const limit = 5;
  // const [page] = useState(1);
  const { products } = useGetFavoritesProducts();
  return (
    <View flex={1} py={9} backgroundColor={'white'}>
      <SSHeaderNavigation
        tabHeaderSearchEnabled={true}
        titleHeaderSearchEnabled={true}
        titleHeaderSearch="Your Favorites"
        iconSearchEnabled={true}
        iconOther={false}
        titleHeaderScreen="Payment Success"
        iconRightHeaderScreen={false}
        iconRightHeaderCart={false}
      />

      <View px={3}>
        <FlatList
          flexDirection={'column'}
          display={'flex'}
          w={'100%'}
          keyExtractor={(item, index) => index + ''}
          data={products?.data.results}
          renderItem={({ item }: { item: IProductFavorites }) => (
            <ItemFavoritesProduct data={item}></ItemFavoritesProduct>
          )}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          columnWrapperStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}
        />
      </View>
    </View>
  );
};

export default ProductFavoritesScreen;
