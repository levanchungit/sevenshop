import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { productAPI } from 'modules';

const fetcher = async (limit: number, category: string) => {
  const response = await productAPI.getProductsCategory(limit, category);
  return response;
};

export default function useGetProductsCategory(limit: number, category: string) {
  const SWR_KEY = API_ROUTES.getProductsCategory(limit, category);
  const { data, error, isLoading, mutate } = useSWR(SWR_KEY, () => fetcher(limit, category));

  return {
    productCategory: data,
    err_productCategory: error,
    loading_productCategory: isLoading,
    mutate,
  };
}
