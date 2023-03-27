import useSWR from 'swr';
import { sizeAPI } from 'modules';

const fetcher = async (id: string) => {
  const response = await sizeAPI.getSizeById(id);
  return response;
};

export default function useGetSizeById(id: string) {
  const swr = useSWR(id, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    size: data,
    err_size: error,
    loading_size: isLoading,
    mutate_size: mutate,
    ...others,
  };
}
