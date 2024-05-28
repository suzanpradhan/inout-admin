import { IoPersonAddOutline } from 'react-icons/io5';
import { AsideEmployeeSheet } from '../(components)/(common)/AsideEmployeeSheet';
import { CreateEmployeeForm } from './(components)/(common)/CreateEmployeeForm';
import { EmployeeTable } from './(components)/EmployeeTable';
import RearrangeEmployeeOrder from './(components)/RearrangeEmployeeOrder';

export default function EmployeeList() {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-slate-700 uppercase my-4">
        Employee List
      </h3>
      <div className="grid grid-cols-12 gap-y-3 gap-x-10 mb-10">
        <div className="col-span-12">
          <h4 className="text-md font-medium text-slate-400 mb-4 flex justify-between items-center">
            All of the employee list
            <AsideEmployeeSheet
              btnClassName="text-slate-400 hover:bg-yellow-100"
              btnLable={<IoPersonAddOutline />}
              btnVariant="outline"
              btnSize="icon"
              sheetTitle="Update Employee"
              sheetDesc="Make changes to Employee. Click save when youre done."
            >
              <CreateEmployeeForm />
            </AsideEmployeeSheet>
          </h4>
          <div className="bg-slate-50 rounded-md shadow-md px-5 py-4">
            <EmployeeTable />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-y-3 gap-x-10 mb-10">
        <div className="col-span-12">
          <h4 className="text-md font-medium text-slate-400 mb-4">
            Drag and drop to rearrange employee order
          </h4>
          <div className="bg-slate-50 rounded-md shadow-md px-2 py-4">
            <RearrangeEmployeeOrder />
          </div>
        </div>
      </div>
    </div>
  );
}
