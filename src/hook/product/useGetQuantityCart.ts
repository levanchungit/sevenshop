import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { cartAPI } from 'modules';

const SWR_KEY = API_ROUTES.getQuantityCart;

const fetcher = async () => {
  const response = await cartAPI.getQuantityCart();
  return response;
};

export default function useGetQuantityCart() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    quantity: data,
    err_quantity: error,
    loading_quantity: isLoading,
    mutate_quantity: mutate,
    ...others,
  };
}
