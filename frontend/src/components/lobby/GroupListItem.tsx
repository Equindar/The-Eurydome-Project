import { cva } from 'class-variance-authority';
import React from 'react';

type GroupListProps = {
  variant?: 'normal' | 'full';
  data: {
    name: string;
    members: string[];
    size: number;
  };
};

export default function GroupListItem({ variant, ...props }: GroupListProps) {
  return (
    <div className={groupListVariants({ variant })}>
      <h1>{props.data.name}</h1>
      <ul>
        {props.data.members.length != 0 ? (
          <>
            {props.data.members.map((item) => {
              return <li>{item}</li>;
            })}
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

const groupListVariants = cva('p-4 m-2 rounded-md', {
  variants: {
    variant: {
      normal: 'bg-white dark:bg-slate-700',
      full: 'bg-white/50 dark:bg-slate-700/50',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});
