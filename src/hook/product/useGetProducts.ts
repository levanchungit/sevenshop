import { useCallback, useMemo } from 'react';
import useSWRInfinite from 'swr/infinite';
import { productAPI } from 'modules';

const fetcher = async (page: number, limit: number) => {
  const response = await productAPI.getProducts(page, limit);
  return response;
};

export default function useGetProducts(page: number, limit: number) {
  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    useCallback(
      (index, previousPageData) => {
        if (previousPageData && !previousPageData.length) {
          return null;
        }
        return `products?page=${page}&limit=${limit}`;
      },
      [page, limit]
    ),
    (url) => fetcher(page, limit)
  );

  const isReachingEnd = useMemo(() => (data ? data[0].data.results.length < 1 : null), [data]);

  return useMemo(
    () => ({
      products: data,
      error_products: error,
      loading_products: isLoading,
      isReachingEnd,
      size,
      setSize,
    }),
    [data, error, isLoading, isReachingEnd, size, setSize]
  );
}
