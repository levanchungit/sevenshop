import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'native-base';
import { useTranslation } from 'react-i18next';
import ItemFavoritesProduct from 'components/ItemFavoritesProduct';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
import useGetFavoritesProducts from 'hook/product/useGetFavoritesProducts';
import { IProductFavorites } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';

const ProductFavoritesScreen = () => {
  // const limit = 5;
  // const [page] = useState(1);
  const { products } = useGetFavoritesProducts();
  const { t } = useTranslation();
  const navigation = useNavigation<AppNavigationProp>();
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
            <ItemFavoritesProduct
              data={item}
              onPress={() => navigation.navigate('Detail', { _id: item._id })}
            ></ItemFavoritesProduct>
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
