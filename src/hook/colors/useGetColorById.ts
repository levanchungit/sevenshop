import useSWR from 'swr';
import { colorAPI } from 'modules';

const fetcher = async (id: string) => {
  const response = await colorAPI.getColorById(id);
  return response;
};

export default function useGetColorById(id: string) {
  const swr = useSWR(id, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    color: data,
    err_color: error,
    loading_color: isLoading,
    mutate_color: mutate,
    ...others,
  };
}
