import type { QueryFunction, QueryKey, UseInfiniteQueryOptions, UseQueryOptions } from '@tanstack/vue-query';
import { computed } from 'vue';
import type { MaybeRef } from 'vue';

export function qo<
  QueryFnData = unknown,
  Err = Error,
  Data = QueryFnData,
  QueryData = QueryFnData,
  Key extends QueryKey = QueryKey,
>(qoGetter: () => UseQueryOptions<QueryFnData, Err, Data, QueryData, Key> & { queryKey: MaybeRef<Key> }) {
  return computed(qoGetter);
}

export function iqo<
  QueryFnData = unknown,
  Err = Error,
  Data = QueryFnData,
  QueryData = QueryFnData,
  Key extends QueryKey = QueryKey,
  Page = unknown,
>(
  lazyQo: Omit<UseInfiniteQueryOptions<QueryFnData, Err, Data, QueryData, Key, Page>, 'queryKey' | 'queryFn'> & {
    queryKey: () => Key;
    queryFn: () => QueryFunction<QueryFnData, Key, Page>;
  }
) {
  const { queryKey, queryFn, ...options } = lazyQo;

  return {
    queryKey: computed(queryKey),
    queryFn: computed(queryFn),
    ...options,
  } as unknown as UseInfiniteQueryOptions<QueryFnData, Err, Data, QueryData, Key, Page>;
}
