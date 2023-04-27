// import useSWR from 'swr';
import useSWR from 'swr';
import { API_ROUTES } from 'global/constants';
import searchAPI from 'modules/searchAPI';

const fetcher = async () => {
  const response = await searchAPI.getKeywordsearch();
  return response;
};

// export default function useGetFavoritesProducts(page: number, limit: number) {
//   const { data, error, size, setSize } = useSWRInfinite(
//     (index, previousPageData) => {
//       if (previousPageData && !previousPageData.length) {
//         return null;
//       }
//       return `products/favorites/get?page=1&limit=5`;
//     },
//     (url) => fetcher(page, limit)
//   );

//   const isReachingEnd = data ? data[0].data.results.length < 1 : null;

export default function useGetKeyword() {
  const SWR_KEY = API_ROUTES.getKeywordsearch;
  const swr = useSWR(SWR_KEY, fetcher);
  const { data, error, isLoading, mutate, ...others } = swr;

  return {
    search: data,
    error,
    others,
    // isReachingEnd,
    // size,
    // setSize,
  };
}
