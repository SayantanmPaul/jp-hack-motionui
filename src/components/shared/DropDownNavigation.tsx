'use client';

import React from 'react';
import { Button } from '../ui/button';

import { cn } from '@/lib/utils';
import { Drawer } from 'vaul';
import { NAVIGATION_DATA, NavigationProps } from '@/mocks/navigations';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const DropDownNavigation = () => {
  const [stack, setStack] = React.useState<NavigationProps[]>([]);

  const currentList =
    stack.length === 0 ? NAVIGATION_DATA : (stack[stack.length - 1].children ?? []);

  const goBack = () => {
    setStack((prev) => prev.slice(0, -1));
  };

  const goForward = (item: NavigationProps) => {
    setStack((prev) => [...prev, item]);
  };

  return (
    <div className="">
      <Drawer.Root>
        <Drawer.Trigger asChild>
          <Button
            className={cn(
              'bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 rounded-full px-3 py-1 cursor-pointer',
              'shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]', //button shadow
            )}
          >
            Open Menu
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <Drawer.Content className="fixed bottom-4 left-4 right-4 outline-none">
            <Drawer.Title className="hidden">Drawer for React.</Drawer.Title>

            <motion.div
              layout
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-gray-100 flex flex-col rounded-4xl px-8 py-6 max-w-xl mx-auto shadow-lg gap-4 max-h-[85vh] overflow-hidden w-full"
            >
              {stack.length > 0 && (
                <button className="flex items-center text-sm text-gray-700 mb-2" onClick={goBack}>
                  <ChevronLeftIcon className="mr-1 size-4" /> Back
                </button>
              )}
              <div className="relative overflow-hidden h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stack.length}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut',
                    }}
                    className="flex flex-col gap-2"
                  >
                    {currentList.map((item, i) => (
                      <NavItem
                        key={`nav-item-${i}-${item.title}`}
                        item={item}
                        onForward={goForward}
                      />
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default DropDownNavigation;

const NavItem = ({
  item,
  onForward,
}: {
  item: NavigationProps;
  onForward: (i: NavigationProps) => void;
}) => {
  const { icon: LucideIcon, title, desc, children } = item;
  const isParent = children && children.length > 0;

  return (
    <button onClick={() => isParent && onForward(item)}>
      <div className="flex items-start gap-0">
        {' '}
        <LucideIcon className="size-4 mt-1 shrink-0" />
        <div className="flex flex-col px-2 flex-1 gap-1 items-start">
          {' '}
          <span className="font-base text-sm text-start">{title}</span>{' '}
          <span className="text-xs text-gray-500 text-start">{desc}</span>{' '}
        </div>{' '}
        {isParent && <ChevronRightIcon className="size-4 mt-1" />}
      </div>
    </button>
  );
};
