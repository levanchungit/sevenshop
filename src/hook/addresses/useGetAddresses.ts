import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import addressAPI from 'modules/addressAPI';

const SWR_KEY = API_ROUTES.getAddresses;

const fetcher = async () => {
  const response = await addressAPI.getAddresses();
  return response;
};

export default function useGetAddresses() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    addresses: data,
    err_addresses: error,
    loading_addresses: isLoading,
    mutate_addresses: mutate,
    ...others,
  };
}
