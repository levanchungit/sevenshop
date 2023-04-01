import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { authAPI } from 'modules';

const fetcher = async () => {
  const response = await authAPI.me();
  return response;
};

export default function useGetMe() {
  const SWR_KEY = API_ROUTES.me;
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    me: data,
    ...others,
  };
}
