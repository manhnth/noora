'use client';

import cx from '@/lib/classix';
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
        'fixed inset-0 z-50 grid bg-black bg-opacity-90 transition duration-300',
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      )}
      onClick={onOutsideClick}
    >
      <div
        className={cx('transition duration-300')}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
