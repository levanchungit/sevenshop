import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { productAPI } from 'modules';

const fetcher = async (limit: number) => {
  const response = await productAPI.getProducts(limit);
  return response;
};

export default function useGetProducts(limit: number) {
  const SWR_KEY = API_ROUTES.getProducts(limit);
  const swr = useSWR(SWR_KEY, (url) => fetcher(limit));
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    products: data,
    err_products: error,
    loading_products: isLoading,
    mutate_product: mutate,
    ...others,
  };
}
