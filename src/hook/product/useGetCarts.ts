import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { cartAPI } from 'modules';

const SWR_KEY = API_ROUTES.getCarts;

const fetcher = async () => {
  const response = await cartAPI.getCarts();
  return response;
};

export default function useGetCarts() {
  const { data, error, isLoading, mutate } = useSWR(SWR_KEY, fetcher);
  // const  = swr;

  return {
    carts: data,
    err_carts: error,
    loading_carts: isLoading,
    mutate,
  };
}
