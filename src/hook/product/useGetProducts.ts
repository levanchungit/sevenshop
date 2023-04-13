// import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import { productAPI } from 'modules';

const fetcher = async (page: number, limit: number) => {
  const response = await productAPI.getProducts(page, limit);
  return response;
};

export default function useGetProducts(page: number, limit: number) {
  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return `products?page=${page}&limit=${limit}`;
    },
    (url) => fetcher(page, limit)
  );

  const isReachingEnd = data ? data[0].data.results.length < 1 : null;

  return {
    products: data,
    error_products: error,
    loading_products: isLoading,
    isReachingEnd,
    size,
    setSize,
  };
}
