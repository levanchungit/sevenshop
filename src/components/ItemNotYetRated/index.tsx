import { useState } from 'react';
import { Box, Flex, Image, Text } from 'native-base';
import { Rating } from 'react-native-ratings';
import ModelPopupRating from 'components/ModelPopupRating';
import { color, size } from 'interfaces/Auth';

type Props = {
  product?: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    type: {
      size: size;
      color: color;
    };
    selled: number;
    categories: number;
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
            uri: product?.image,
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
            Size: {product?.type.size.title}
          </Text>
          <Text
            variant={'body2'}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            Color: {product?.type.color.title}
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
