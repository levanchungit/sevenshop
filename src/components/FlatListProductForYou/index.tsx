import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, Text, FlatList } from 'native-base';
import ItemProductForYou from 'components/ItemProductForYou';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

type Props = {
  data: IProduct[];
};

const FlatListProductForYou = (props: Props) => {
  const { data } = props;
  const navigation = useNavigation<AppNavigationProp>();

  const RenderItemForYou = ({ data }: { data: IProduct }) => {
    return (
      <ItemProductForYou
        name={data.name}
        image={data.images[0]}
        price={data.price}
        selled={123}
        onPress={() => navigation.navigate('Detail', { _id: data._id })}
      />
    );
  };
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      nestedScrollEnabled
    >
      <View>
        <Text fontWeight={'bold'} style={styles.headerForYou}>
          FOR YOU
        </Text>
        <FlatList
          contentContainerStyle={styles.flashList}
          numColumns={2}
          data={data}
          renderItem={({ item }) => <RenderItemForYou data={item} />}
          ListFooterComponent={
            <View w={'100%'} alignItems="center" mt={12} flexDirection="row" key={1}>
              <ItemProductForYou
                name={''}
                image={''}
                price={0}
                selled={0}
                onPress={() => {}}
                key={2}
              />
              <ItemProductForYou
                name={''}
                image={''}
                price={0}
                selled={0}
                onPress={() => {}}
                key={3}
              />
            </View>
          }
          onEndReachedThreshold={0.1}
        />
      </View>
    </ScrollView>
  );
};

export default FlatListProductForYou;
