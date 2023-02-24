import React, { useEffect, useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
import { ScrollView, View, FlatList } from 'native-base';
import ButtonCategory from 'components/ButtonCategory';
import ItemProductCategory from 'components/ItemProductCategory';
// import { AppNavigationProp } from 'providers/navigation/types';
import { GetProductSuccessData } from 'interfaces/Auth';
// import { DATA, Item } from '../../mocks';
import styles from './styles';

type Props = {
  data: GetProductSuccessData[];
};
const FlatListProductCategory = (props: Props) => {
  const { data } = props;
  // const navigation = useNavigation<AppNavigationProp>();
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
  const [idCategory, setIdCategory] = useState(0);

  const RenderItemCategory = ({ data }: { data: GetProductSuccessData }) => {
    return (
      <ItemProductCategory
        onPress={() => console.log('')}
        name={data.name}
        image={
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656'
        }
        price={data.price}
      />
    );
  };

  const id_Category: any = () => {
    let category;
    ItemSelected.map((item) => {
      if (item.isSelected === true) {
        return (category = item._id);
      }
    });
    return category;
  };
  useEffect(() => {
    setIdCategory(id_Category());
    console.log(id_Category());
  }, [id_Category()]);

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
        data={data.filter(function (item) {
          return item.categories_type === idCategory;
        })}
        renderItem={({ item }) => <RenderItemCategory data={item} />}
        keyExtractor={(item1) => item1._id}
      />
    </View>
  );
};

export default FlatListProductCategory;
