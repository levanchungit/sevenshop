import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { productAPI } from 'modules';

const SWR_KEY = API_ROUTES.getProductsFlashSale;

const fetcher = async () => {
  const response = await productAPI.getProductFlashSale();
  return response;
};

export default function useGetProductFlashSale() {
  const { data, error, isLoading, mutate } = useSWR(SWR_KEY, fetcher);
  // const  = swr;

  return {
    productFlashSale: data,
    err_productFlashSale: error,
    loading_productFlashSale: isLoading,
    mutate,
  };
}
