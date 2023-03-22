import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { colorAPI } from 'modules';

const SWR_KEY = API_ROUTES.getColors;

const fetcher = async () => {
  const response = await colorAPI.getColors();
  return response;
};

export default function useGetColors() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    colors: data,
    err_colors: error,
    loading_colors: isLoading,
    mutate_colors: mutate,
    ...others,
  };
}
