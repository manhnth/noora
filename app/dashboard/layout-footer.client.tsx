'use client';

import cx from '@/lib/classix';
import { useState } from 'react';
import Link from 'next/link';

const menu = [
  {
    name: 'Note',
    url: '/note',
  },
  {
    name: 'Writing',
    url: '/writing',
  },
  {
    name: 'Reading',
    url: '/reading',
  },
  {
    name: 'Setting',
    url: '/setting',
  },
];

export default function Footer() {
  const [pickedIndex, setPickedIndex] = useState<number>(2);

  return (
    <footer id="toolbar">
      <div className="tool-list">
        {menu.map((item, i) => {
          return (
            <Link href={item.url} key={i}>
              <div
                onClick={() => setPickedIndex(i)}
                className={cx(pickedIndex === i && '-active')}
              >
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </footer>
  );
}
