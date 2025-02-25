import {
  type InfiniteQueryPageParamsOptions,
  type QueryClient,
  type QueryFunctionContext,
  type InfiniteQueryObserverOptions,
} from '@tanstack/vue-query';
import type { AxiosInstance } from 'axios';
import type { LazyQo } from '../lib';

export function createGetExercisesInfinity(options: { queryClient: QueryClient; httpClient: AxiosInstance }) {
  function key() {
    return ['getExercisesInfinity'];
  }

  type Key = ReturnType<typeof key>;

  type Page = number;

  const pageParams = {
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageNumber) => {
      lastPage.total;

      return lastPageNumber < lastPage.pagesCount ? lastPageNumber + 1 : undefined;
    },
  } satisfies InfiniteQueryPageParamsOptions<ExercisesResponse, Page>;

  async function queryFn({ pageParam: page }: QueryFunctionContext<Key, Page>) {
    const { data } = await options.httpClient.get<ExercisesResponse>('/exercise', {
      params: {
        limit: 5,
        page,
      },
    });

    return data;
  }

  function getQo() {
    return {
      queryKey: key(),
      queryFn: async (context) => queryFn(context),
      ...pageParams,
    } satisfies InfiniteQueryObserverOptions<ExercisesResponse, unknown, unknown, unknown, Key, Page>;
  }

  function getLazyQo() {
    return {
      queryKey: () => key(),
      queryFn: () => async (context) => queryFn(context),
      ...pageParams,
    } satisfies LazyQo<ExercisesResponse, Key, Page>;
  }

  async function query() {
    return options.queryClient.ensureInfiniteQueryData(getQo());
  }

  query.lazyQo = getLazyQo;

  return query;
}

interface ExercisesResponse {
  items: Exercise[];
  total: number;
  pagesCount: number;
}

interface Exercise {
  id: number;
  name: string;
  description: string;
  createdAt: string;
}
