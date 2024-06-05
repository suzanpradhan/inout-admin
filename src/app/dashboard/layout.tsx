import AppBar from './(components)/AppBar';
import AppSidebar from './(components)/AppSidebar';

export default function dashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div id="main-wrapper">
      <section className="wrapper">
        <AppSidebar />
        <div className="relative ml-0 transition-transform md:ml-64">
          <AppBar />
          <div className="h-screen">
            <div
              id="site-content"
              className="h-full bg-white text-slate-900 pt-28 pb-28 md:py-24 px-5 overflow-y-scroll"
            >
              {children}
            </div>
          </div>
          <div className="absolute bottom-0 right-0 w-full flex justify-center items-center h-10 bg-slate-50 border-t border-t-slate-200 text-slate-900 text-xs">
            <p>Copyright &copy; 2024. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
