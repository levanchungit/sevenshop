import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { cartAPI } from 'modules';

const SWR_KEY = API_ROUTES.getCarts;

const fetcher = async () => {
  const response = await cartAPI.getCarts();
  return response;
};

export default function useGetCarts() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    carts: data,
    err_carts: error,
    loading_carts: isLoading,
    mutate_carts: mutate,
    ...others,
  };
}
