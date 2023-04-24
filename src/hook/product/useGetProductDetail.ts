import { useCallback } from 'react';
import useSWR from 'swr';
import { productAPI } from 'modules';

const useGetProductDetail = (id: string) => {
  const fetcher = useCallback(async () => {
    const response = await productAPI.getProductID(id);
    return response;
  }, [id]);

  const { data, error, isLoading, mutate, ...others } = useSWR(id, fetcher);

  return {
    product: data,
    err_product: error,
    loading_product: isLoading,
    mutate_product: mutate,
    ...others,
  };
};

export default useGetProductDetail;
