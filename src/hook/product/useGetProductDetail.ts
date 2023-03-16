import useSWR from 'swr';
// import { API_ROUTES } from 'global/constants';
import { productAPI } from 'modules';

// const SWR_KEY = API_ROUTES.getProductDetail;

const fetcher = async (id: string) => {
  const response = await productAPI.getProductID(id);
  return response;
};

export default function useGetProductDetail(id: string) {
  const swr = useSWR(id, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    product: data,
    err_product: error,
    loading_product: isLoading,
    mutate_product: mutate,
    ...others,
  };
}
