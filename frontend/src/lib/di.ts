import { QueryClient } from '@tanstack/vue-query';
import { createHttpClient } from './http-client';
import { createGetExercisesInfinity } from '@/api';

export type Di = ReturnType<typeof createDi>;

export function createDi() {
  const httpClient = createHttpClient();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: 60 * 1000,
      },
    },
  });

  const getExetcisesInfinity = createGetExercisesInfinity({ httpClient, queryClient });

  return {
    httpClient,
    queryClient,
    getExetcisesInfinity,
  };
}
