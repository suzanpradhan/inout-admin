'use client';
import Image from 'next/image';
import { useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import AppLogo from '../../../../public/site/images/logoipsum-311.svg';
import MainMenu from './(common)/MainMenu';

const AppSidebar = () => {
  const [toggleAside, setToggleAside] = useState(false);
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${toggleAside ? '-translate-x-full' : ''} md:translate-x-0 bg-gray-50 border-r border-r-slate-200`}
      aria-label="Sidebar"
    >
      <div className="relative flex items-center justify-center w-full h-20 border-b border-b-slate-200">
        <div className="relative w-full h-12">
          <Image
            src={AppLogo}
            alt="in-out-system-site-logo"
            fill
            objectFit="contain"
            sizes="(max-width: 768px) 200vw, 33vw"
          />
        </div>
      </div>

      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="absolute left-full inline-flex items-center p-2 mt-1 ms-5 text-2xl text-slate-950 hover:text-white rounded-sm md:hidden bg-slate-200 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setToggleAside((prev) => !prev)}
      >
        <GrMenu />
      </button>
      <MainMenu />
    </aside>
  );
};

export default AppSidebar;
