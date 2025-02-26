<script setup lang="ts">
import { createDi } from '@/lib/di';
import { useInfiniteQuery } from '@tanstack/vue-query';
import { iqo } from '@/lib/vue-query';
import { vIntersectionObserver } from '@vueuse/components';

const di = createDi();

const exercisesQuery = useInfiniteQuery(
  iqo({ ...di.getExetcisesInfinity.lazyQo(), select: (data) => data.pages.flatMap((page) => page.items) })
);

function onSkeletonIntersect([entity]: IntersectionObserverEntry[]) {
  if (entity.isIntersecting) {
    exercisesQuery.fetchNextPage();
  }
}
</script>

<template>
  <ul class="flex flex-col gap-1">
    <li v-for="item in exercisesQuery.data.value" :key="item.id">
      <div
        class="bg-surface border-surface transition-border hover:border-primary-hover min-h-16 cursor-pointer rounded-md border-1 p-2 duration-75"
      >
        <div class="flex items-center gap-2">
          <span class="text-primary bg-surface-soft inline-flex rounded-sm p-1">{{ item.name }}</span>

          <span class="flex items-center gap-2">
            <span v-for="group in item.muscleGroups" class="bg-primary/10 inline-flex rounded-sm p-1">{{
              group.name
            }}</span>
          </span>
        </div>
        <div class="mt-2 text-sm">{{ item.description }}</div>
      </div>
    </li>

    <template v-if="exercisesQuery.hasNextPage.value">
      <li class="bg-surface min-h-18 animate-pulse rounded-md p-2" v-intersection-observer="onSkeletonIntersect"></li>

      <li v-for="_ in 4" class="bg-surface min-h-18 animate-pulse rounded-md p-2"></li>
    </template>
  </ul>
</template>
