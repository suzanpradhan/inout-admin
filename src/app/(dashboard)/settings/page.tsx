'use client';

import { SettingsForm } from './(components)/SettingsForm';

const product = ['samsung', 'toshiba', 'hp', 'lenovo', 'mac'];
export default function Settings() {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold text-slate-700 uppercase my-4">
        Site Setting
      </h3>
      <div className="grid grid-cols-12 gap-y-3 gap-x-10">
        <div className="col-span-8">
          <h4 className="text-md font-medium text-slate-400 mb-4">
            Setup your site informations
          </h4>
          <div className="bg-slate-50 rounded-md shadow-md px-5 py-4">
            <SettingsForm />
          </div>
        </div>
        <div className="col-span-4">
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
