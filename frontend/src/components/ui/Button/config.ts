import { cva } from 'class-variance-authority';

export const buttonCn = cva('px-6 py-2 rounded-md box-border cursor-pointer transition-bg duration-100', {
  variants: {
    variant: {
      filled: '',
      outlined: '',
    },
    color: {
      primary: '',
    },
  },
  compoundVariants: [
    {
      variant: 'filled',
      color: 'primary',
      class: 'bg-primary text-typo-reversed hover:bg-primary-hover active:bg-primary-active',
    },
    {
      variant: 'outlined',
      color: 'primary',
      class: 'text-primary border-1 border-primary hover:bg-primary-hover/10 active:bg-primary-active/20',
    },
  ],
});
