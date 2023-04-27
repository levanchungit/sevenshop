// import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import searchAPI from 'modules/searchAPI';

const fetcher = async (page: number, limit: number, keyword: string) => {
  const response = await searchAPI.getSearchProducts(page, limit, keyword);
  return response;
};

export default function useGetSearchProducts(page: number, limit: number, keyword: string) {
  const { data, error, size, setSize, isLoading } = useSWRInfinite(
    (index, previousPageData) => {
      if (previousPageData && !previousPageData.length) {
        return null;
      }
      return `/products/search_products/find?page=${page}&limit=${limit}&keyword=${keyword}`;
    },
    (url) => fetcher(page, limit, keyword)
  );

  const isReachingEnd = data ? data[0].data.results.length < 1 : null;

  return {
    searchproducts: data,
    error_searchproducts: error,
    loading_searchproducts: isLoading,
    isReachingEnd,
    size,
    setSize,
  };
}
