import { cva } from 'class-variance-authority';
import React from 'react';

type EffectTileProps = {
  variant?: 'buff' | 'debuff' | 'none';
};

export default function EffectTile({ variant, ...props }: EffectTileProps) {
  return (
    <div {...props} className={effectTileVariants()}>
      <h1 className="">Title</h1>
      <p>Desciption</p>
      <span>Time left:</span>
    </div>
  );
}

const effectTileVariants = cva('p-4 rounded-md', {
  variants: {
    variant: {
      buff: 'bg-green-800 dark:bg-green-400',
      debuff: '',
      none: '',
    },
  },
  defaultVariants: {
    variant: 'none',
  },
});
