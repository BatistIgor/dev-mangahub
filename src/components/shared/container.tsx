import { cn } from '@/lib/utils';


interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
  return <div className={cn('px-3 mx-auto max-w-[1150px]', className)}>{children}</div>;
};