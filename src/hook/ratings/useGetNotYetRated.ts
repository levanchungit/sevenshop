import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import ratingAPI from 'modules/ratingAPI';

const SWR_KEY = API_ROUTES.getNotYetRated;

const fetcher = async () => {
  const response = await ratingAPI.getNotYetRated();
  return response;
};

export default function useGetNotYetRated() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    not_yet_rated: data,
    err_not_yet_rated: error,
    loading_not_yet_rated: isLoading,
    mutate_not_yet_rated: mutate,
    ...others,
  };
}
