import type { InfiniteQueryObserverOptions, QueryFunction, QueryKey } from '@tanstack/vue-query';

export interface LazyQo<Data = unknown, Key extends QueryKey = QueryKey, Page = unknown>
  extends Omit<InfiniteQueryObserverOptions<Data, unknown, unknown, unknown, Key, Page>, 'queryKey' | 'queryFn'> {
  queryKey: () => Key;
  queryFn: () => QueryFunction<Data, Key, Page>;
}
