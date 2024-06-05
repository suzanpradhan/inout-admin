'use client';

import { CreateEmployeeForm } from '../(components)/(common)/CreateEmployeeForm';

export default function EmployeeCreate() {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-slate-700 uppercase my-4">
        Create Employee
      </h3>
      <div className="grid grid-cols-12 gap-y-3 gap-x-10">
        <div className="col-span-12 md:col-span-8">
          <h4 className="text-md font-medium text-slate-400 mb-4">
            Add new employee in the system
          </h4>
          <div className="bg-slate-50 rounded-md shadow-md px-5 py-4">
            <CreateEmployeeForm />
          </div>
        </div>
        <div className="md:hidden col-span-4">
          <h4 className="text-md font-medium text-slate-400 mb-4">
            {/* Recent employee activities */}
          </h4>
          <div className="bg-slate-50 rounded-md shadow-md">
            {/* <StatusTable /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
