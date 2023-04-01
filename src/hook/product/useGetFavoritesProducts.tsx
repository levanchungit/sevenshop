// import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { productAPI } from 'modules';

const fetcher = async (page: number, limit: number) => {
  const response = await productAPI.getFavoritesProduct(page, limit);
  return response;
};

export default function useGetFavoritesProducts(page: number, limit: number) {
  const { data, error, size, setSize } = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return `products/favorites/get?page=1&limit=5`;
    },
    (url) => fetcher(page, limit)
  );

  const isReachingEnd = data ? data[0].data.results.length < 1 : null;

  return {
    products: data,
    error,
    isReachingEnd,
    size,
    setSize,
  };
}
