'use client';

import DropDownNavigation from '@/components/shared/DropDownNavigation';
import { NAVIGATION_DATA } from '@/mocks/navigations';

const HomePage = () => {
  return (
    <main className="h-screen flex items-center justify-center font-sans bg-background w-full overflow-hidden">
      <DropDownNavigation navigationData={NAVIGATION_DATA} triggrLable="Open Menu" />
    </main>
  );
};

export default HomePage;
