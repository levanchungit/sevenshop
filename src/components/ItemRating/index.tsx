import { Box, Flex, HStack, Image, Skeleton, Text } from 'native-base';
import { Rating } from 'react-native-ratings';
import useGetColorById from 'hook/colors/useGetColorById';
import useGetSizeById from 'hook/sizes/useGetSizeById';
import useGetUserById from 'hook/users/useGetUserById';
import { IRating } from 'interfaces/Rating';

type Props = {
  rating: IRating;
};

const ItemRating = (props: Props) => {
  const { rating } = props;
  const { user, err_user, loading_user } = useGetUserById(rating?.user_id);
  const { color, err_color, loading_color } = useGetColorById(rating?.color_id);
  const { size, err_size, loading_size } = useGetSizeById(rating?.size_id);
  return (
    <Box paddingY="5" w="100%" borderTopWidth="1" borderTopColor="#C9C9C9">
      <Flex direction="row">
        <Skeleton rounded="full" size={50} marginX={3} isLoaded={!loading_user}>
          <Image
            source={{
              uri: user?.data.avatar
                ? user?.data.avatar
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
        </Skeleton>

        <Flex direction="column" w="80%">
          <Flex direction="row" justifyContent="space-between">
            <Skeleton.Text lines={2} w="40%" isLoaded={!loading_user}>
              <Text
                w="40%"
                numberOfLines={2}
                variant="title"
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                {err_user
                  ? 'Error'
                  : user?.data.full_name
                  ? user?.data.full_name
                  : user?.data.email}
              </Text>
            </Skeleton.Text>

            <Flex direction="column">
              <Text
                variant="caption"
                style={{
                  fontVariant: ['lining-nums'],
                }}
              >
                {rating.modify.date ? rating.modify.date : 'Null'}
              </Text>
              <Skeleton.Text lines={1} isLoaded={!!(!loading_color && !loading_size)}>
                <Text
                  variant="caption"
                  style={{
                    fontVariant: ['lining-nums'],
                  }}
                >
                  Color: {err_color ? 'Error' : color ? color?.data.name : 'Null'} | Size:{' '}
                  {err_size ? 'Error' : size ? size?.data.name : 'Null'}
                </Text>
              </Skeleton.Text>
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
