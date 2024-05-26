import { BreadCrumb } from './(common)/BreadCrumb';

const AppBar = () => {
  return (
    <div className="absolute top-0 right-0 z-50 w-full h-20 px-5 bg-slate-50 border-b border-b-slate-200 text-slate-900 flex items-center">
      {/* <a href="#">Home</a> <RiArrowDropRightLine size={24} /> Dashboard */}
      <BreadCrumb />
    </div>
  );
};

export default AppBar;
