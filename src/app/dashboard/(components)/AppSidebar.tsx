import Image from 'next/image';
import AppLogo from '../../../../public/site/images/logoipsum-311.svg';
import MainMenu from './(common)/MainMenu';

const AppSidebar = () => {
  return (
    <aside
      id="sidebar-multi-level-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gray-50 border-r border-r-slate-200"
      aria-label="Sidebar"
    >
      <div className="flex items-center justify-center w-full h-20 border-b border-b-slate-200">
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
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {/* <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg> */}
      </button>
      <MainMenu />
      {/* <div className="h-full overflow-y-auto ">
        <div className="px-3 py-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-gray-900 group"
              >
                <span className="inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-slate-600 group-hover:text-slate-200">
                  <HiChartPie size={24} />
                </span>
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <button
                type="button"
                className="w-full text-base flex items-center text-gray-600 hover:text-gray-900 group"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <span className="inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-slate-600 group-hover:text-slate-200">
                  <BiSolidUserAccount size={24} />
                </span>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Manage Employee
                </span>
                <RiArrowDropDownLine size={24} />
              </button>
              <ul id="dropdown-example" className="block py-2 space-y-2">
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Billing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Invoice
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-gray-900 group"
              >
                <span className="inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-slate-600 group-hover:text-slate-200">
                  <RiSettingsFill size={24} />
                </span>

                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
                <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                  Pro
                </span>
              </a>
            </li>
            <li>
              <AlertDialog>
                <Button
                  variant="link"
                  className="p-0 flex items-center text-red-600 hover:text-red-900 group"
                >
                  <span className="inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-red-600 group-hover:text-red-200">
                    <AiOutlineLogout size={24} />
                  </span>
                  <span className="flex-1 ms-3 whitespace-nowrap text-base">
                    Log Out
                  </span>
                </Button>
              </AlertDialog>
            </li>
          </ul>
        </div>
      </div> */}
    </aside>
  );
};

export default AppSidebar;
