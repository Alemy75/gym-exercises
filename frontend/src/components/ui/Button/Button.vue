<script setup lang="ts">
import { Primitive } from 'radix-vue';
import { computed } from 'vue';
import { buttonCn } from './config';
import type { ButtonProps } from './types';
import { cn } from '../../../lib/cn';

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'filled',
  color: 'primary',
});

const delegatedProps = computed(() => {
  const { variant, color, class: classRoot, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <Primitive :as="'button'" :class="cn(buttonCn({ variant, color }), props.class)" v-bind="delegatedProps">
    <slot></slot>
  </Primitive>
</template>
