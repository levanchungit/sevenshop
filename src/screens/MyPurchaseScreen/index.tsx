import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList } from 'native-base';
// eslint-disable-next-line import/no-cycle
import ItemProductMyPurchases from 'components/ItemProductMyPurchases';
import SSHeaderNavigation from 'components/SSHeaderNavigation';

type Props = object;

export type ItemProduct = {
  name: string;
  price: number;
  quantity: number;
  image: string;
  size_color: string;
};
type ItemMyPurchases = {
  id: string;
  products: ItemProduct[];
  total: number;
  status: number;
};

const data: ItemMyPurchases[] = [
  {
    id: '1',
    products: [
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
    ],
    total: 500000,
    status: 1,
  },
  {
    id: '2',
    products: [
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
    ],
    total: 500000,
    status: 1,
  },

  {
    id: '3',
    products: [
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
    ],
    total: 500000,
    status: 1,
  },

  {
    id: '4',
    products: [
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
      {
        name: 'Áo sơ mi nam cao cấp',
        price: 50000,
        quantity: 2,
        image:
          'https://eu.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lv-fair-isle-stripes-nylon-tracksuit--HOY21WZED900_PM2_Front%20view.png?wid=656&hei=656',
        size_color: 'XL_Blue',
      },
    ],
    total: 500000,
    status: 1,
  },
];

const MyPurchaseScreen = (props: Props) => {
  const [itemSelected, setItemSelected] = useState([
    {
      _id: 1,
      title: 'To Pay',
      isSelected: true,
    },
    {
      _id: 2,
      title: 'To Ship',
      isSelected: false,
    },
    {
      _id: 3,
      title: 'To Receive',
      isSelected: false,
    },
    {
      _id: 4,
      title: 'Completed',
      isSelected: false,
    },
    {
      _id: 5,
      title: 'Cancel',
      isSelected: false,
    },
  ]);
  const RenderItemProductMyPurchases = ({ data }: { data: ItemMyPurchases }) => (
    <ItemProductMyPurchases
      total={data.total}
      quantitiesProduct={data.products.length}
      name={data.products[1].name}
      image={data.products[1].image}
    />
  );
  return (
    <View flex={1} pt={3} backgroundColor="white">
      <View style={{ marginTop: 20 }}>
        <View ml={3}>
          <SSHeaderNavigation
            tabHeaderSearchEnabled={false}
            titleHeaderSearchEnabled={false}
            iconSearchEnabled={false}
            iconOther={false}
            titleHeaderSearch={''}
            titleHeaderScreen={'My Purchases'}
            iconRightHeaderScreen={false}
            quantityItems={0}
          />
        </View>
        <ScrollView
          paddingX={3}
          mt={3}
          mr={3}
          horizontal
          showsHorizontalScrollIndicator={false}
          h={60}
        >
          {itemSelected.map((item1) => (
            // eslint-disable-next-line no-unused-expressions
            <Pressable
              w={100}
              marginX={3}
              h={12}
              p={2}
              alignItems="center"
              justifyContent={'center'}
              onPress={() => {
                const itemSelected2 = itemSelected.map((item2) => {
                  return { ...item2, isSelected: item1._id === item2._id };
                });
                setItemSelected(itemSelected2);
              }}
              style={{
                borderBottomColor: item1.isSelected ? '#AC1506' : 'black',
              }}
              borderBottomWidth={item1.isSelected ? 2 : 0}
              key={item1._id}
            >
              <Text
                color={item1.isSelected ? '#AC1506' : 'black'}
                textAlign="center"
                variant={'Body1'}
                fontSize={16}
                fontWeight="Regular"
                fontFamily={'Raleway_500Medium'}
              >
                {item1.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => <RenderItemProductMyPurchases data={item} />}
          keyExtractor={(item) => item.id}
          marginBottom={110}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default MyPurchaseScreen;
