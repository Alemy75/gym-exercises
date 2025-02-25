import Button from './Button.vue';
import type { Meta, StoryObj } from '@storybook/vue3';
import type { ButtonProps } from './types';

interface Args extends ButtonProps {
  text?: string;
}

const meta: Meta<Args> = {
  title: 'UI Kit/Button',
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'select' },
    },
    color: {
      options: ['primary'],
      control: { type: 'select' },
    },
    text: {
      description: 'Текст кнопки',
    },
  },
};

export default meta;

export const Default: StoryObj<Args> = {
  args: {
    variant: 'filled',
    color: 'primary',
    text: 'Button',
  },
  render: (args) => ({
    setup() {
      const { text, ...props } = args;

      return () => (
        <div class="text-center">
          <Button {...props}>{text}</Button>
        </div>
      );
    },
  }),
};
