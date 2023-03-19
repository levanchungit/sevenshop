import { useState } from 'react';
import { Box, Flex, Image, Text } from 'native-base';
import { Rating } from 'react-native-ratings';
import ModelPopupRating from 'components/ModelPopupRating';
import { STATUS_PRODUCT } from 'global/constants';
import { review } from 'interfaces/Auth';
import { IModify } from 'interfaces/Basic';
import { IStock } from 'interfaces/Product';

type Props = {
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

const ItemNotYetRated = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
    setRatingScore(rating);
    setShowModal(!showModal);
  };
  const { product } = props;
  return (
    <Flex
      w="48%"
      marginBottom={3}
      borderWidth={1}
      borderColor="#C9C9C9"
      borderRadius={10}
      padding={3}
    >
      <Flex direction="column" alignItems="center" justifyContent="space-between">
        <Image
          source={{
            uri: product?.images[0],
          }}
          alt="Product img"
          size="full"
          w="100%"
          h={100}
        />
        <Flex direction="column" w="100%">
          <Text
            numberOfLines={1}
            variant={'title'}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            {product?.name}
          </Text>
          <Text
            variant={'body2'}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            Size: {product?.size_ids}
          </Text>
          <Text
            variant={'body2'}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            Color: {product?.color_ids}
          </Text>
        </Flex>
      </Flex>
      <Box marginBottom={3} />
      <Rating
        startingValue={0}
        onFinishRating={(rating: number) => ratingCompleted(rating)}
        imageSize={30}
        style={{
          paddingVertical: 12,
          width: '100%',
        }}
      />
      <ModelPopupRating
        showModal={showModal}
        setShowModal={setShowModal}
        rating={ratingScore}
        product={product}
      />
    </Flex>
  );
};

export default ItemNotYetRated;
