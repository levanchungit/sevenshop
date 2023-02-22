import React from 'react';
import { ScrollView, View, Text, FlatList } from 'native-base';
import ItemProductForYou from 'components/ItemProductForYou';
import styles from './styles';
import { DATA, Item } from '../../mocks';

type Props = object;

const FlatListProductForYou = (props: Props) => {
  const RenderItemForYou = ({ data }: { data: Item }) => {
    return (
      <ItemProductForYou
        name={data.name}
        image={data.image}
        price={data.price}
        selled={data.selled}
        onPress={() => alert('item nè')}
      />
    );
  };
  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
    >
      <View>
        <Text fontWeight={'bold'} style={styles.headerForYou}>
          FOR YOU
        </Text>
        <FlatList
          contentContainerStyle={styles.flashList}
          numColumns={2}
          data={DATA}
          scrollEnabled={false}
          renderItem={({ item }) => <RenderItemForYou data={item} />}
          keyExtractor={(item1) => item1.id}
        />
      </View>
    </ScrollView>
  );
};

export default FlatListProductForYou;
