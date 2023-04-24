import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';
import ButtonCategory from 'components/ButtonCategory';
import ItemProductCategory from 'components/ItemProductCategory';
import useGetCategories from 'hook/product/useGetCategories';
import useGetProductsCategory from 'hook/product/useGetProductsCategory';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

const FlatListProductCategory = () => {
  const navigation = useNavigation<AppNavigationProp>();
  const limit = 6;
  const { categories } = useGetCategories();
  const [ItemSelected, setItemSelected]: any = useState([]);
  const [firstItemSelected, setFirstItemSelected] = useState(false);
  const [idItemSelected, setIdItemSelected] = useState('');
  const { productCategory } = useGetProductsCategory(limit, idItemSelected);

  useEffect(() => {
    if (categories) {
      const newCategories = categories?.data.results.map((category: any) => ({
        ...category,
        isSelected: false,
      }));
      setItemSelected(newCategories);
    }
  }, []);

  useEffect(() => {
    if (!firstItemSelected && ItemSelected.length > 0) {
      const items = [...ItemSelected];
      items[0].isSelected = true;
      setIdItemSelected(items[0]._id);
      setItemSelected(items);
      setFirstItemSelected(true);
    }
  }, [ItemSelected]);

  const RenderItemCategory = ({ data }: { data: IProduct }) => {
    return (
      <ItemProductCategory
        onPress={() => navigation.navigate('Detail', { _id: data._id })}
        name={data.name}
        image={data.images[0]}
        price={data.price}
      />
    );
  };

  return (
    <View>
      <View style={styles.coverCategories}>
        {ItemSelected.length > 0 ? (
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={ItemSelected}
            renderItem={({ item }: any) => {
              return (
                <ButtonCategory
                  onPress={() => {
                    const ItemSelected3 = ItemSelected.map((item2: any) => {
                      return { ...item2, isSelected: item.name === item2.name };
                    });
                    setItemSelected(ItemSelected3);
                    setIdItemSelected(item._id);
                  }}
                  title={item.name}
                  isSelected={item.isSelected}
                  key={item._id}
                />
              );
            }}
          />
        ) : (
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <ButtonCategory title="" isSelected={false} onPress={() => null} />
            <ButtonCategory title="" isSelected={false} onPress={() => null} />
            <ButtonCategory title="" isSelected={false} onPress={() => null} />
            <ButtonCategory title="" isSelected={false} onPress={() => null} />
          </View>
        )}
      </View>
      {!productCategory ? (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <ItemProductCategory name={''} image={''} price={0} onPress={() => null} />
          <ItemProductCategory name={''} image={''} price={0} onPress={() => null} />
        </View>
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.flashListFlashSale}
          data={productCategory ? productCategory.results : null}
          renderItem={({ item }) => <RenderItemCategory data={item} />}
          keyExtractor={(item1, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default FlatListProductCategory;
