import { Box, Flex, Image, Text, Pressable } from 'native-base';
import * as Icon from 'react-native-feather';
import { Rating } from 'react-native-ratings';
import { STATUS_PRODUCT } from 'global/constants';
import { review } from 'interfaces/Auth';
import { IModify } from 'interfaces/Basic';
import { IStock } from 'interfaces/Product';

type Props = {
  name: string;
  time: string;
  comment: string;
  rating: number;
  product?: {
    _id?: string;
    name: string;
    price: number;
    price_sale: number;
    description: string;
    images: string[];
    stock: IStock[];
    status: STATUS_PRODUCT;
    category_ids: string[];
    color_ids: string[];
    size_ids: string[];
    created_at: string;
    created_by: string;
    modify: IModify[];
    reviews: review[];
  };
};

const ItemRating = (props: Props) => {
  const { name, time, comment, rating, product } = props;
  return (
    <Box paddingY="5" w="100%" borderTopWidth="1" borderTopColor="#C9C9C9">
      <Flex direction="row">
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt="Alternate Text"
          size="full"
          alignSelf="flex-start"
          borderRadius="full"
          w={[51, 71, 91]}
          h={[51, 71, 91]}
          marginX={3}
        />
        <Flex direction="column" w="80%">
          <Flex direction="row" justifyContent="space-between">
            <Text
              variant="title"
              style={{
                fontVariant: ['lining-nums'],
              }}
            >
              {name}
            </Text>
            <Text
              variant="caption"
              style={{
                fontVariant: ['lining-nums'],
              }}
            >
              {time}
            </Text>
          </Flex>
          <Rating
            startingValue={rating}
            imageSize={15}
            readonly={true}
            style={{
              paddingVertical: 10,
              width: '30%',
              alignItems: 'flex-start',
            }}
          />
          <Text
            variant="body1"
            width="80%"
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            {comment}
          </Text>
          {product ? (
            <Pressable onPress={() => console.log(product.name)}>
              <Flex
                direction="row"
                backgroundColor="gray.200"
                w="100%"
                marginTop={3}
                minH={60}
                alignItems="center"
                justifyContent="center"
              >
                <Image
                  source={{
                    uri: product?.images[0],
                  }}
                  alt="Product img"
                  size="full"
                  alignSelf="flex-start"
                  borderRadius="full"
                  w="15%"
                  marginX={3}
                />
                <Flex direction="column" width="65%" padding={3}>
                  <Text variant="body2">{product.name}</Text>
                  <Text variant="body2">
                    Size: {product.size_ids} | Color: {product.color_ids}
                  </Text>
                </Flex>
                <Icon.ChevronRight strokeWidth={1} width="10%" stroke="black" />
              </Flex>
            </Pressable>
          ) : null}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ItemRating;
