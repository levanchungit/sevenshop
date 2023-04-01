import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import { notificationAPI } from 'modules';

const fetcher = async (id: string) => {
  const response = await notificationAPI.getNotification(id);
  return response;
};

// '6419376a0c2832125feda672'

export default function useGetNotifications(id: string) {
  const SWR_KEY = API_ROUTES.getNotifications(id);
  const swr = useSWR(SWR_KEY, (url) => fetcher(id));
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    notifications: data,
    error_notification: error,
    loading_notification: isLoading,
    mutate_notification: mutate,
    ...others,
  };
}
