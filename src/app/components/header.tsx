'use client';

import React from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';

import useScroll from '../../hooks/use-scroll';
import { cn } from '../../lib/utils';
import ThemeSwitch from './buttonComponent/ThemeSwitch';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          'border-b border-gray-200 bg-white/75 dark:bg-gray-800 backdrop-blur-lg': scrolled,
          'border-b border-gray-200 bg-white': selectedLayout,
        },
      )}
    >

      <div className="flex h-[47px] pl-14 items-center justify-between px-4">
        <ThemeSwitch />
        <div className="flex items-center justify-center space-x-4">
        </div>
        <div className="hidden md:block">
          <div className="h-8 w-8 rounded-full bg-gray-500 dark:bg-zinc-300 flex items-center justify-center text-center">
            <span className="font-semibold text-sm text-black dark:text-white">MF</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;