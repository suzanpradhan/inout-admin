'use client';

import { GiEntryDoor, GiExitDoor } from 'react-icons/gi';
import { TbUsersGroup } from 'react-icons/tb';
import { NormalTable } from './(components)/(common)/NormalTable';
import { StatusTable } from './(components)/(common)/StatusTable';

const product = ['samsung', 'toshiba', 'hp', 'lenovo', 'mac'];
export default function Home() {
  // const dispatch = useAppDispatch();
  // const handleCart = (product: string) => {
  //   console.log('Adding to cart', product);
  //   dispatch(add(product));
  // };
  return (
    // <div>
    //   <button onClick={() => handleCart(product[0])} className="text-black">
    //     add button
    //   </button>
    // </div>
    <>
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-slate-700 uppercase my-4">
          Dashboard
        </h3>
        <div className="grid grid-cols-12 gap-y-3 gap-x-5">
          <div className="col-span-3 group relative cursor-pointer overflow-hidden bg-slate-700 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 w-full">
            <span className="absolute top-10 z-0 rounded-full bg-slate-600 transition-all duration-300 group-hover:h-20 group-hover:w-20 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md flex flex-col justify-between items-stretch ">
              <p className="text-2xl text-slate-50 font-bold">
                Friday, May 23 2024
              </p>
              <p className="text-5xl text-slate-50 font-bold">3:54 PM</p>
            </div>
          </div>
          <div className="col-span-3 group relative cursor-pointer overflow-hidden bg-slate-50 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 w-full">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-slate-500 transition-all duration-300 group-hover:bg-slate-400">
                <TbUsersGroup size={40} color="white" />
              </span>
              <div className="absolute right-0 top-0 space-y-6 pt-7 text-6xl font-bold leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>150</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Total employee &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 group relative cursor-pointer overflow-hidden bg-slate-50 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 w-full">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-slate-500 transition-all duration-300 group-hover:bg-slate-400">
                <GiExitDoor size={40} color="white" />
              </span>
              <div className="absolute right-0 top-0 space-y-6 pt-7 text-6xl font-bold leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>120</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Active employee &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-3 group relative cursor-pointer overflow-hidden bg-slate-50 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 w-full">
            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-500 transition-all duration-300 group-hover:scale-[10]"></span>
            <div className="relative z-10 mx-auto max-w-md">
              <span className="grid h-20 w-20 place-items-center rounded-full bg-slate-500 transition-all duration-300 group-hover:bg-slate-400">
                <GiEntryDoor size={40} color="white" />
              </span>
              <div className="absolute right-0 top-0 space-y-6 pt-7 text-6xl font-bold leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                <p>30</p>
              </div>
              <div className="pt-5 text-base font-semibold leading-7">
                <p>
                  <a
                    href="#"
                    className="text-sky-500 transition-all duration-300 group-hover:text-white"
                  >
                    Inactive employee &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <h3 className="text-xl font-semibold text-slate-700 uppercase my-4">
          Employee Section
        </h3>
        <div className="grid grid-cols-12 gap-y-3 gap-x-10">
          <div className="col-span-8">
            <h4 className="text-md font-medium text-slate-400 mb-4">
              Active employee list
            </h4>
            <div className="bg-slate-50 rounded-md shadow-md">
              <NormalTable />
            </div>
          </div>
          <div className="col-span-4">
            <h4 className="text-md font-medium text-slate-400 mb-4">
              Recent employee activities
            </h4>
            <div className="bg-slate-50 rounded-md shadow-md">
              <StatusTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
