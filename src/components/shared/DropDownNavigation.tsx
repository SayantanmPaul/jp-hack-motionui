'use client';

import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Drawer } from 'vaul';
import { NavigationProps } from '@/mocks/navigations';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface DropDownNavigationProps {
  customTrigger?: React.ReactNode;
  triggrLable: string;
  className?: string;
  navigationData: NavigationProps[];
}

const DropDownNavigation = ({
  customTrigger,
  triggrLable = 'Open Menu',
  className,
  navigationData,
}: DropDownNavigationProps) => {
  const [stack, setStack] = React.useState<NavigationProps[]>([]);
  const [isBackWard, setIsBackWard] = React.useState<boolean>(false);

  // get the list of current items
  const currentList =
    stack.length === 0 ? navigationData : (stack[stack.length - 1].children ?? []);

  const goBack = () => {
    setIsBackWard(true);
    setStack((prev) => prev.slice(0, -1));
  };

  const goForward = (item: NavigationProps) => {
    setIsBackWard(false);
    setStack((prev) => [...prev, item]);
  };

  return (
    <div className="">
      <Drawer.Root>
        <Drawer.Trigger asChild>
          {customTrigger ? (
            customTrigger
          ) : (
            <Button
              className={cn(
                'bg-indigo-500 hover:bg-indigo-600 transition-colors duration-300 rounded-full px-3 py-1 cursor-pointer',
                'shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]', //button shadow
                className,
              )}
            >
              {triggrLable}
            </Button>
          )}
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
          <Drawer.Content tabIndex={-1} className="fixed bottom-4 left-4 right-4 outline-none">
            <Drawer.Title className="hidden">Drawer for React.</Drawer.Title>

            <motion.div
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-gray-100 rounded-4xl px-8 py-6 max-w-xl mx-auto shadow-lg max-h-[85vh] overflow-hidden w-full h-auto"
            >
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stack.length}
                    initial={{ opacity: 0, x: isBackWard ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isBackWard ? 20 : -20 }}
                    transition={{
                      type: 'spring',
                      stiffness: 850,
                      damping: 35,
                      mass: 0.03,
                    }}
                    // snappyness behavior add
                    className="flex flex-col gap-4"
                    role="menu"
                  >
                    {stack.length > 0 && (
                      <button
                        aria-label="Go back"
                        className="flex items-center gap-2 text-sm mb-3 cursor-pointer w-fit "
                        onClick={goBack}
                      >
                        <ChevronLeftIcon className=" size-4" /> Back
                      </button>
                    )}
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
    <button
      role="menuitem"
      aria-haspopup={isParent ? 'true' : undefined}
      aria-expanded={isParent ? 'false' : undefined}
      onClick={() => isParent && onForward(item)}
      className="cursor-pointer "
    >
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
