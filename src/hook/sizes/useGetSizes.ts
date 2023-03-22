import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { sizeAPI } from 'modules';

const SWR_KEY = API_ROUTES.getSizes;

const fetcher = async () => {
  const response = await sizeAPI.getSizes();
  return response;
};

export default function useGetSizes() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    sizes: data,
    err_sizes: error,
    loading_sizes: isLoading,
    mutate_sizes: mutate,
    ...others,
  };
}
