import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { orderAPI } from 'modules';

const fetcher = async () => {
  const response = await orderAPI.getOrders();
  return response;
};

export default function useGetOrders() {
  const SWR_KEY = API_ROUTES.getOrders;
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    orders: data,
    error,
    isLoading,
    mutate,
    ...others,
  };
}
