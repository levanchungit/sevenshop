import React from 'react';
import { ScrollView, View, FlatList } from 'native-base';
import ItemProductCheckout from 'components/ItemProductCheckout';
import { GetProductSuccessData } from 'interfaces/Auth';
import styles from './styles';
type Props = {
  data: GetProductSuccessData[];
};

const FlatListProductCheckout = (props: Props) => {
  const { data } = props;

  const RenderItemCheckout = ({ data }: { data: GetProductSuccessData }) => {
    return (
      <ItemProductCheckout
        name="Áo sơ mi nam phối màu cực chất"
        price={123}
        image="https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656"
        size_color="XL_Black"
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
        <FlatList
          contentContainerStyle={styles.flashList}
          numColumns={2}
          data={data}
          renderItem={({ item }) => <RenderItemCheckout data={item} />}
        />
      </View>
    </ScrollView>
  );
};

export default FlatListProductCheckout;
