'use client';

import { cx } from '@/lib/classix';
import React from 'react';

type ModalProps = React.ComponentProps<'div'> & {
  isVisible?: boolean;
  onOutsideClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Modal({
  isVisible,
  onOutsideClick,
  children,
  ...rest
}: ModalProps) {
  return (
    <div
      className={cx(
        'fixed inset-0 z-50 grid bg-black bg-opacity-40 transition duration-300',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
      onClick={onOutsideClick}
    >
      <div
        className={cx(
          'absolute right-0 h-full w-11/12 max-w-[38rem] border-l-[1px] border-grey-600 bg-white transition duration-300 dark:bg-[#1a1a1b]'
        )}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
