'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineLogout } from 'react-icons/ai';
import { BiSolidUserAccount } from 'react-icons/bi';
import { HiChartPie } from 'react-icons/hi2';
import { RiArrowDropDownLine, RiSettingsFill } from 'react-icons/ri';
import { AlertDialog } from './AlertDialog';

interface MenuItem {
  label: string;
  icon: JSX.Element;
  link?: string;
  subItems?: { label: string; link: string }[];
  badge?: string;
  alertDialog?: boolean;
}

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: <HiChartPie size={24} />,
    link: '/',
    subItems: [],
  },
  {
    label: 'Manage Employee',
    icon: <BiSolidUserAccount size={24} />,
    subItems: [
      {
        label: 'Employee List',
        link: '/employee',
      },
      {
        label: 'Add new employee',
        link: '/employee/create',
      },
    ],
  },
  {
    label: 'Settings',
    icon: <RiSettingsFill size={24} />,
    link: '/settings',
    badge: 'Pro',
    subItems: [],
  },
  {
    label: 'Log Out',
    icon: <AiOutlineLogout size={24} />,
    alertDialog: true,
    subItems: [],
  },
];

const MainMenu: React.FC = () => {
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleSubMenuToggle = (label: string) => {
    if (openSubMenu === label) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(label);
    }
  };

  const isActive = (item: MenuItem) => {
    if (item.link === pathname) return true;
    if (item.subItems) {
      return item.subItems.some((subItem) => subItem.link === pathname);
    }
    return false;
  };

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-3 py-4">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => {
            const itemIsActive = isActive(item);
            return (
              <li key={index}>
                {item.subItems && item.subItems.length > 0 ? (
                  <>
                    <button
                      type="button"
                      className={`w-full text-base flex items-center text-gray-600 hover:text-gray-900 group`}
                      aria-controls={`dropdown-${index}`}
                      aria-expanded={openSubMenu === item.label}
                      onClick={() => handleSubMenuToggle(item.label)}
                    >
                      <span
                        className={`${itemIsActive ? 'bg-slate-600 text-slate-200 px-4' : ''} inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-slate-600 group-hover:text-slate-200`}
                      >
                        {item.icon}
                      </span>
                      <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                        {item.label}
                      </span>
                      <RiArrowDropDownLine
                        size={24}
                        className={`transition-transform ${
                          openSubMenu === item.label ? 'rotate-180' : 'rotate-0'
                        }`}
                      />
                    </button>
                    <ul
                      id={`dropdown-${index}`}
                      className={`py-2 space-y-2 transition-all ${
                        openSubMenu === item.label ? 'block' : 'hidden'
                      }`}
                    >
                      {item.subItems.map((subItem, subIndex) => {
                        const subItemIsActive = subItem.link === pathname;
                        return (
                          <li key={subIndex}>
                            <Link
                              href={subItem.link ?? '#'}
                              className={`${subItemIsActive ? 'bg-slate-500 text-slate-200' : ''} flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-slate-400 hover:text-slate-100 dark:text-white dark:hover:bg-slate-700`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : item.alertDialog ? (
                  <>
                    <Separator className="my-4" />
                    <AlertDialog>
                      <Button
                        variant="link"
                        className="p-0 flex items-center text-red-600 hover:text-red-900 group"
                      >
                        <span className="inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-red-600 group-hover:text-red-200">
                          {item.icon}
                        </span>
                        <span className="flex-1 ms-3 whitespace-nowrap text-base">
                          {item.label}
                        </span>
                      </Button>
                    </AlertDialog>
                  </>
                ) : (
                  <Link
                    href={item.link ?? '#'}
                    className="flex items-center text-gray-600 hover:text-gray-900 group"
                  >
                    <span
                      className={`${itemIsActive ? 'bg-slate-600 text-slate-200 px-4' : ''} inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-slate-600 group-hover:text-slate-200`}
                    >
                      {item.icon}
                    </span>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-200 bg-slate-500 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
