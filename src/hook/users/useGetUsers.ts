import useSWRInfinite from 'swr/infinite';
import userAPI from 'modules/userAPI';

const fetcher = async (page: number, limit: number) => {
  const response = await userAPI.getUsers(page, limit);
  return response;
};

export default function useGetUsers(page: number, limit: number) {
  const { data, error, size, setSize } = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return `products?page=${page}&limit=${limit}`;
    },
    (url) => fetcher(page, limit)
  );

  const isReachingEnd = data ? data[0].data.results.length < 1 : null;

  return {
    users: data,
    errorUsers: error,
    isReachingEnd,
    size,
    setSize,
  };
}
