import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { categoryAPI } from 'modules';

const SWR_KEY = API_ROUTES.getCategories;

const fetcher = async () => {
  const response = await categoryAPI.getCategories();
  return response;
};

const swrConfig = {
  revalidateOnMount: true,
  dedupingInterval: 3000,
  errorRetryCount: 5,
  errorRetryInterval: 5000,
};

export default function useGetCategories() {
  const swr = useSWR(SWR_KEY, fetcher, swrConfig);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    categories: data,
    err_categories: error,
    loading_categories: isLoading,
    mutate_categories: mutate,
    ...others,
  };
}
