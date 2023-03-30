import useSWR from 'swr';
import userAPI from 'modules/userAPI';

const fetcher = async (id: string) => {
  const response = await userAPI.getUserById(id);
  return response;
};

export default function useGetUserById(id: string) {
  const swr = useSWR(id, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    user: data,
    err_user: error,
    loading_user: isLoading,
    mutate_user: mutate,
    ...others,
  };
}
