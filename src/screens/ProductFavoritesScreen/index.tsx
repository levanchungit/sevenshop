import { Text, View, FlatList, Pressable, Image } from 'native-base';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

const data = [
  {
    id: '1',
    title: 'The Bodacious Period Essential T-Shirt',
    price: '300.000',
    image: 'https://th.bing.com/th/id/OIP.ThmKsOdlJutZumjUHsxbXwHaIK?pid=ImgDet&w=1361&h=1500&rs=1',
    category: 'T-Shrit',
  },
  {
    id: '2',
    title: 'Alstyle Essential T-Shirt',
    price: '300.000',
    image:
      'https://th.bing.com/th/id/R.1042542be1a853baf9993f9ab8b49081?rik=ir5NnhPDLNDRyA&pid=ImgRaw&r=0',
    category: 'T-Shrit',
  },
];

const renderItem1 = ({ item }: any) => {
  return (
    <Pressable w={'50%'} h={'100%'}>
      <View w={'100%'} h={'auto'} borderRadius={1} mt={2} px={1}>
        <Image
          alt="Image OTP"
          w={'100%'}
          h={197}
          source={{
            uri: item.image,
          }}
        />
        <Text variant={'body1'}>{item.title}</Text>
        <Text
          variant={'body1'}
          color={'primary.600'}
          style={{
            fontVariant: ['lining-nums'],
          }}
        >
          {item.price}đ
        </Text>
      </View>
    </Pressable>
  );
};

const ProductFavoritesScreen = () => {
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
      />

      <View px={3}>
        <FlatList
          w={'100%'}
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem1}
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
