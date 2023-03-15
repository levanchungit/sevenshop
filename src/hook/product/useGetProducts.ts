import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { productAPI } from 'modules';

const SWR_KEY = API_ROUTES.getProducts;

const fetcher = async () => {
  const response = await productAPI.getProducts();

  return response;
};

export default function useGetProducts() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    products: data,
    err_products: error,
    loading_products: isLoading,
    mutate_product: mutate,
    ...others,
  };
}
