'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDENAV_ITEMS } from '../../constants/sideNav';
import { SideNavItem } from '../../types/SIdenav';
import { Icon } from '@iconify/react';
import { motion, useCycle } from 'framer-motion';
import { NavLinks } from '@/constants';
import ThemeSwitch from './buttonComponent/ThemeSwitch';

type MenuItemWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};


const SideNav = () => {
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      className={`fixed inset-0 z-50 w-full ${isOpen ? '' : 'pointer-events-none'
        }`}
      ref={containerRef}
    >
      {isOpen &&
        <motion.div
          className="md:w-60 bg-white dark:bg-gray-950 z-50 h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex"
          initial={{ x: -300 }} // Initial position off-screen to the left
          animate={{ x: 0 }} // Move in from the left
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Spring animation
          variants={sidebar}
        >
          <motion.div
            className="absolute inset-0 right-0 w-10 bg-white"
            variants={sidebar}
          />
          <motion.ul
            variants={variants}
            className="absolute grid w-5 gap-3 px-10 py-16 max-h-screen overflow-y-auto"
          >
            <div className="md:w-60 bg-white dark:bg-gray-950 z-50 h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
              <div className="flex flex-col space-y-6 w-full">
                <Link
                  href="/"
                  className="flex flex-row space-x-3 items-center justify-center md:justify-start md:px-6 border-b border-zinc-200 h-12 w-full"
                >
                  <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
                  <span className="font-bold text-xl hidden md:flex">Logo</span>
                </Link>

                <div className="flex flex-col space-y-2  md:px-6 ">
                  {NavLinks.map((item, idx) => {
                    return <MenuItem key={idx} item={item} />;
                  })}
                </div>
              </div>
              <MenuToggle toggle={toggleOpen} />
            </div>
          </motion.ul>
        </motion.div>
      }

      {!isOpen &&
        <div className="md:w-10 bg-white dark:bg-gray-950 z-50 h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
          <MenuToggle toggle={toggleOpen} />
        </div>
      }
    </motion.nav>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: any }) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };


  return (
    <div className="">
      {item.submenu ? (
        <>
          <button
            onClick={toggleSubMenu}
            className={`flex flex-row items-center p-2 rounded-lg hover-bg-zinc-100 w-full justify-between hover:bg-zinc-100 ${pathname === item ? 'bg-gray-200' : ''
              }`}
          >
            <div className="flex flex-row space-x-4 items-center">
              {item.icon}
              <span className="font-semibold text-xl flex">'asd</span>
            </div>

            <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
              <Icon icon="lucide:chevron-down" width="24" height="24" />
            </div>
          </button>

          {/* {subMenuOpen && (
            <div className="my-2 ml-12 flex flex-col space-y-4">
              {item.subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={`${subItem.path === pathname ? 'font-bold' : ''
                      }`}
                  >
                    <span>{subItem.title}</span>
                  </Link>
                );
              })}
            </div>
          )} */}
        </>
      ) : (
        <Link
          href={''}
          className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-zinc-100 ${item.path === pathname ? 'bg-zinc-100' : ''
            }`}
        >
          {item.icon}
          <span className="font-semibold text-green-400 text-xl flex">{item.name}</span>
        </Link>
      )}
    </div>
  );
};

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <>
    <button
      onClick={toggle}
      className="pointer-events-auto justify-center  absolute right-2 top-[14px] z-30"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.3 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  </>

);


const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};


const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};