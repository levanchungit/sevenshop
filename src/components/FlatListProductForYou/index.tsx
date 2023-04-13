import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { ScrollView, View, Text, FlatList } from 'react-native';
import ItemProductForYou from 'components/ItemProductForYou';
import { IProduct } from 'interfaces/Product';
import { AppNavigationProp } from 'providers/navigation/types';
import styles from './styles';

type Props = {
  data: IProduct[];
  onEndReached: Function;
};

const FlatListProductForYou = (props: Props) => {
  const { data, onEndReached } = props;
  const { t } = useTranslation();
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
        <Text style={styles.headerForYou}>{t('Home.forYou')}</Text>
        <FlatList
          contentContainerStyle={styles.flashList}
          numColumns={2}
          data={data}
          renderItem={({ item }) => <RenderItemForYou data={item} />}
          ListFooterComponent={
            <View style={styles.listFooter} key={1}>
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
          onEndReached={() => onEndReached()}
        />
      </View>
    </ScrollView>
  );
};

export default FlatListProductForYou;
