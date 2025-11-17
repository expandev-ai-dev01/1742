import { clsx } from 'clsx';

export interface InputVariantProps {
  error?: boolean;
  className?: string;
}

export function getInputClassName(props: InputVariantProps): string {
  const { error = false, className } = props;

  return clsx(
    'w-full px-3 py-2 border rounded-md',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'border-gray-300 focus:ring-blue-500': !error,
      'border-red-500 focus:ring-red-500': error,
    },
    className
  );
}
