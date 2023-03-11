import { useState } from 'react';
import { Flex, Image, Text } from 'native-base';
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
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Image
          source={{
            uri: product?.image,
          }}
          alt="Product img"
          size="full"
          alignSelf="flex-start"
          w="40%"
          h={70}
        />
        <Flex direction="column" w="50%">
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
