import { styled } from '../styles';
import { ComponentProps, ElementType } from 'react';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  padding: '$2 $4',
  transition: '$colors',
  cursor: 'pointer',
  fontFamily: '$default',

  $$bg: '',
  $$bgHover: '',
  backgroundColor: '$$bg',

  '&button, &[type="button"], &[type="reset"], &[type="submit"]': {
    backgroundColor: '$$bg',
  },
  '&:hover': {
    backgroundColor: '$$bgHover',
  },

  variants: {
    variant: {
      primary: {
        color: '$primary1',
        fontWeight: '$semibold',
        $$bg: '$colors$primary10',
        $$bgHover: '$colors$primary9',
      },

      secondary: {
        color: '$secondary1',
        fontWeight: '$semibold',
        $$bg: '$colors$secondary10',
        $$bgHover: '$colors$secondary9',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
}

Button.displayName = 'Button';
