import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import ratingAPI from 'modules/ratingAPI';

const SWR_KEY = API_ROUTES.getRated;

const fetcher = async () => {
  const response = await ratingAPI.getRated();
  return response;
};

export default function useGetRated() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    rated: data,
    err_rated: error,
    loading_rated: isLoading,
    mutate_rated: mutate,
    ...others,
  };
}
