import React, { useState } from 'react';
import { ScrollView, View, FlatList } from 'native-base';
import ButtonCategory from 'components/ButtonCategory';
import ItemProductCategory from 'components/ItemProductCategory';
import styles from './styles';
import { DATA, Item } from '../../mocks';

type Props = object;

const FlatListProductCategory = (props: Props) => {
  const [ItemSelected, setItemSelected] = useState([
    {
      _id: 1,
      title: 'Hoddies',
      isSelected: true,
    },
    {
      _id: 2,
      title: 'Sweeters',
      isSelected: false,
    },
    {
      _id: 3,
      title: 'Bombies',
      isSelected: false,
    },
    {
      _id: 4,
      title: 'Joggers',
      isSelected: false,
    },
    {
      _id: 5,
      title: 'Jeans',
      isSelected: false,
    },
    {
      _id: 6,
      title: 'T-shirts',
      isSelected: false,
    },
    {
      _id: 7,
      title: 'Vests',
      isSelected: false,
    },
  ]);
  const RenderItemCategory = ({ data }: { data: Item }) => {
    return (
      <ItemProductCategory
        onPress={() => alert('item nè')}
        name={data.name}
        image={data.image}
        price={data.price}
      />
    );
  };
  return (
    <View>
      <View style={styles.coverCategories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {ItemSelected.map((item) => (
            <ButtonCategory
              onPress={() => {
                const ItemSelected2 = ItemSelected.map((item2) => {
                  return { ...item2, isSelected: item.title === item2.title };
                });
                setItemSelected(ItemSelected2);
              }}
              title={item.title}
              isSelected={item.isSelected}
              key={item._id}
            />
          ))}
        </ScrollView>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.flashListFlashSale}
        data={DATA}
        renderItem={({ item }) => <RenderItemCategory data={item} />}
        keyExtractor={(item1) => item1.id}
      />
    </View>
  );
};

export default FlatListProductCategory;
