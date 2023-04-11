import { Box, Flex, HStack, Image, Text } from 'native-base';
import { Rating } from 'react-native-ratings';
import { IRating } from 'interfaces/Rating';
import { formatDate } from 'utils/common';

type Props = {
  rating: IRating;
};

const ItemRating = (props: Props) => {
  const { rating } = props;
  return (
    <Box paddingY="5" w="100%" borderTopWidth="1" borderTopColor="#C9C9C9">
      <Flex direction="row">
        <Image
          source={{
            uri: rating.user_id.avatar
              ? rating.user_id.avatar
              : 'https://res.cloudinary.com/dzhlsdyqv/image/upload/v1680444107/Image/Logo_Typography_Larger_cbpx8o.png',
          }}
          alt="Undefinded img"
          size="full"
          alignSelf="flex-start"
          borderRadius="full"
          borderWidth={1}
          borderColor="#C9C9C9"
          w={50}
          h={50}
          marginX={3}
        />

        <Flex direction="column" w="80%">
          <Flex direction="row" justifyContent="space-between">
            <Text
              w="60%"
              numberOfLines={2}
              variant="title"
              style={{
                fontVariant: ['lining-nums'],
              }}
            >
              {rating.user_id.full_name ? rating.user_id.full_name : rating.user_id.email}
            </Text>

            <Flex w="40%" direction="column" alignItems="flex-end">
              <Text
                variant="caption"
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                {formatDate(rating.modify.date)}
              </Text>
              <Text
                variant="caption"
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                Color: {rating.color_id.name} | Size: {rating.size_id.name}
              </Text>
            </Flex>
          </Flex>
          <Rating
            startingValue={rating.rating}
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
            mb={3}
          >
            {rating.content}
          </Text>
          <HStack>
            {rating?.images.map((data: string) => {
              return (
                <Image
                  key={data}
                  source={{
                    uri: data,
                  }}
                  alt="Undefinded img"
                  size="full"
                  w={100}
                  h={100}
                  mr={3}
                />
              );
            })}
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ItemRating;
