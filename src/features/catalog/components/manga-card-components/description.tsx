import React from 'react';
import { cn } from '@/lib/utils'

interface Props {
  className?: string;
  description: string;
}

export const Description: React.FC<Props> = ({ className, description }) => {
  return (
    <div className={cn('',className)}>
      <p className="font-semibold text-[14px] leading-[19px] line-clamp-5">{description}</p>
    </div>
  );
};