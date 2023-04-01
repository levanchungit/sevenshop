// import { useState } from 'react';
import { View, FlatList } from 'native-base';
import ItemFavoritesProduct from 'components/ItemFavoritesProduct';
import SSHeaderNavigation from 'components/SSHeaderNavigation';
// import useGetFavoritesProducts from 'hook/product/useGetFavoritesProducts';
import { IProductFavorites } from 'interfaces/Product';

// const renderItem1 = ( item : IProductFavorites) => {
//   return (
//     <Pressable w={'50%'} h={'100%'}>
//       <View w={'100%'} h={'auto'} borderRadius={1} mt={2} px={1}>
//         <Image
//           alt="Image OTP"
//           w={'100%'}
//           h={197}
//           source={{
//             uri: item.image,
//           }}
//         />
//         <Text variant={'body1'}>{item.title}</Text>
//         <Text
//           variant={'body1'}
//           color={'primary.600'}
//           style={{
//             fontVariant: ['lining-nums'],
//           }}
//         >
//           {item.price}đ
//         </Text>
//       </View>
//     </Pressable>
//   );
// };

const ProductFavoritesScreen = () => {
  // const limit = 6;
  // const [page] = useState(0);
  // const { products } = useGetFavoritesProducts(page, limit);
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

      <View px={3}>
        <FlatList
          w={'100%'}
          keyExtractor={(item, index) => index + ''}
          data={null}
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
