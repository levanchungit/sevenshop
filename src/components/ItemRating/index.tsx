import { Box, Flex, Image, Text } from 'native-base';
import { Rating } from 'react-native-ratings';

type Props = {
  name: string;
  time: string;
  comment: string;
  rating: number;
};

const ItemRating = (props: Props) => {
  const { name, time, comment, rating } = props;
  return (
    <Box paddingY="5" w="100%" borderTopWidth="1" borderTopColor="#C9C9C9">
      <Flex direction="row">
        <Image
          source={{
            uri: 'https://wallpaperaccess.com/full/317501.jpg',
          }}
          alt="Alternate Text"
          size="full"
          shadow="9"
          alignSelf="flex-start"
          borderRadius="full"
          w={[10, 70, 90]}
          h={[10, 70, 90]}
          marginX={3}
        />
        <Flex direction="column" w="80%">
          <Flex direction="row" justifyContent="space-between">
            <Text fontSize={[12, 20, 24]} fontWeight="bold">
              {name}
            </Text>
            <Text fontSize={[10, 16, 24]}>{time}</Text>
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
          <Text fontSize={[12, 16, 24]} width="80%">
            {comment}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ItemRating;
