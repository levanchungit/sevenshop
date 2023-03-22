import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { orderAPI } from 'modules';

const fetcher = async (id: string) => {
  const response = await orderAPI.getOrderById(id);
  return response;
};

// '6419376a0c2832125feda672'

export default function useGetOrderById(id: string) {
  const SWR_KEY = API_ROUTES.getOrderById(id);
  const swr = useSWR(SWR_KEY, (url) => fetcher(id));
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    order: data,
    err_order: error,
    loading_order: isLoading,
    mutate_order: mutate,
    ...others,
  };
}
