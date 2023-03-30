import useSWRInfinite from 'swr/infinite';
import ratingAPI from 'modules/ratingAPI';

const fetcher = async (id: string, page: number, limit: number) => {
  const response = await ratingAPI.getRatingsByProductId(id, page, limit);
  return response;
};

export default function useGetRatings(id: string, page: number, limit: number) {
  const { data, error, size, setSize } = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return `products?page=${page}&limit=${limit}`;
    },
    (url) => fetcher(id, page, limit)
  );

  const isReachingEnd = data ? data[0].data.results.length < 1 : null;

  return {
    ratings: data,
    errorRatings: error,
    isReachingEnd,
    size,
    setSize,
  };
}
