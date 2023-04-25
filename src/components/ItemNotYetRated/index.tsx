import { useState } from 'react';
import { Box, Flex, Image, Text } from 'native-base';
import { Rating } from 'react-native-ratings';
import ModelPopupRating from 'components/ModelPopupRating';
import { INotYetRated } from 'interfaces/Rating';

type Props = {
  product: INotYetRated;
  mutate: Function;
};

const ItemNotYetRated = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [ratingScore, setRatingScore] = useState(0);
  const ratingCompleted = (rating: number) => {
    setRatingScore(rating);
    setShowModal(!showModal);
  };
  const { product, mutate } = props;
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
            uri: product?.product_image,
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
            {product?.product_name}
          </Text>
          <Text
            variant={'body2'}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            Size: {product?.size_name}
          </Text>
          <Text
            variant={'body2'}
            style={{
              fontVariant: ['lining-nums'],
            }}
          >
            Color: {product?.color_name}
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
        mutate={mutate}
      />
    </Flex>
  );
};

export default ItemNotYetRated;
