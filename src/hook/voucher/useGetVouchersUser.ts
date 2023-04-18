import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import voucherAPI from 'modules/voucherAPI';

const SWR_KEY = API_ROUTES.getVouchersUser;

const fetcher = async () => {
  const response = await voucherAPI.getVouchersUser();
  return response;
};

export default function useGetVouchersUser() {
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    vouchers: data,
    err_vouchers: error,
    loading_vouchers: isLoading,
    mutate_vouchers: mutate,
    ...others,
  };
}
