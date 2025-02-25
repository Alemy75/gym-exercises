<script setup lang="ts">
import { createDi } from '@/lib/di';
import { useInfiniteQuery } from '@tanstack/vue-query';
import { iqo } from './lib/vue-query';
import { watch } from 'vue';

const di = createDi();

const exercisesQuery = useInfiniteQuery(
  iqo({ ...di.getExetcisesInfinity.lazyQo(), select: (data) => data.pages.flatMap((page) => page.items) })
);

watch(exercisesQuery.data, (value) => {
  console.log(value);
});
</script>

<template>
  <div>
    <ul class="flex flex-col gap-4">
      <li class="bg-surface rounded-sm p-2" v-for="item in exercisesQuery.data.value" :key="item.id">
        <div class="text-primary">{{ item.name }}</div>

        <div>{{ item.description }}</div>
      </li>
    </ul>
  </div>
</template>
