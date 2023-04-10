import { Text, View, FlatList } from 'native-base';
import { useTranslation } from 'react-i18next';
import ItemFavoritesProduct from 'components/ItemFavoritesProduct';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetFavoritesProducts from 'hook/product/useGetFavoritesProducts';
import { IProductFavorites } from 'interfaces/Product';

const ProductFavoritesScreen = () => {
  // const limit = 5;
  // const [page] = useState(1);
  const { products } = useGetFavoritesProducts();
  const { t } = useTranslation();
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
        quantityItems={12}
        iconRightHeaderCart={false}
        quantityHeaderCarts={0}
      />

      <Text color={'primary.500'} fontSize={25}>
        {t('hello')}
      </Text>

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
