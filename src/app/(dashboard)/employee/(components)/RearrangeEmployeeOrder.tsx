'use client';
import { GrDrag } from 'react-icons/gr';
const employees = [
  { orderNumber: 1, fullname: 'John Smith', position: 'Principal' },
  { orderNumber: 2, fullname: 'Jane Johnson', position: 'Accountant' },
  { orderNumber: 3, fullname: 'Alex Williams', position: 'Teacher' },
  { orderNumber: 4, fullname: 'Chris Brown', position: 'Manager' },
  { orderNumber: 5, fullname: 'Katie Jones', position: 'Engineer' },
  { orderNumber: 6, fullname: 'Michael Garcia', position: 'Developer' },
  { orderNumber: 7, fullname: 'Sarah Miller', position: 'Designer' },
  { orderNumber: 8, fullname: 'David Davis', position: 'Coordinator' },
  { orderNumber: 9, fullname: 'Laura Rodriguez', position: 'Analyst' },
  { orderNumber: 10, fullname: 'Robert Martinez', position: 'Specialist' },
  { orderNumber: 11, fullname: 'Emily Taylor', position: 'Supervisor' },
  { orderNumber: 12, fullname: 'William Anderson', position: 'Administrator' },
  { orderNumber: 13, fullname: 'Sophia Thomas', position: 'Assistant' },
  { orderNumber: 14, fullname: 'Daniel Hernandez', position: 'Technician' },
  { orderNumber: 15, fullname: 'Olivia Lopez', position: 'Counselor' },
  { orderNumber: 16, fullname: 'James Lee', position: 'Auditor' },
  { orderNumber: 17, fullname: 'Isabella Gonzalez', position: 'Coordinator' },
  { orderNumber: 18, fullname: 'Benjamin Wilson', position: 'Developer' },
  { orderNumber: 19, fullname: 'Emma Moore', position: 'Manager' },
  { orderNumber: 20, fullname: 'Lucas Taylor', position: 'Teacher' },
  { orderNumber: 21, fullname: 'Avery Clark', position: 'Accountant' },
  { orderNumber: 22, fullname: 'Mia Lewis', position: 'Principal' },
  { orderNumber: 23, fullname: 'Ethan Hall', position: 'Engineer' },
  { orderNumber: 24, fullname: 'Harper Rodriguez', position: 'Designer' },
  { orderNumber: 25, fullname: 'Alexander Lewis', position: 'Analyst' },
  { orderNumber: 26, fullname: 'Ella White', position: 'Supervisor' },
  { orderNumber: 27, fullname: 'Logan Perez', position: 'Specialist' },
  { orderNumber: 28, fullname: 'Amelia King', position: 'Coordinator' },
  { orderNumber: 29, fullname: 'Jacob Scott', position: 'Assistant' },
  { orderNumber: 30, fullname: 'Abigail Young', position: 'Technician' },
  { orderNumber: 31, fullname: 'Mason Green', position: 'Counselor' },
  { orderNumber: 32, fullname: 'Charlotte Hill', position: 'Auditor' },
  { orderNumber: 33, fullname: 'Liam Baker', position: 'Developer' },
  { orderNumber: 34, fullname: 'Ava Adams', position: 'Manager' },
  { orderNumber: 35, fullname: 'Noah Ward', position: 'Teacher' },
  { orderNumber: 36, fullname: 'Elizabeth King', position: 'Accountant' },
  { orderNumber: 37, fullname: 'William Hughes', position: 'Principal' },
  { orderNumber: 38, fullname: 'Sofia Foster', position: 'Engineer' },
  { orderNumber: 39, fullname: 'Ethan Russell', position: 'Designer' },
  { orderNumber: 40, fullname: 'Grace Coleman', position: 'Analyst' },
  { orderNumber: 41, fullname: 'Michael Morris', position: 'Supervisor' },
  { orderNumber: 42, fullname: 'Avery Diaz', position: 'Specialist' },
  { orderNumber: 43, fullname: 'Ella Bailey', position: 'Coordinator' },
  { orderNumber: 44, fullname: 'Matthew Powell', position: 'Assistant' },
  { orderNumber: 45, fullname: 'Scarlett Murphy', position: 'Technician' },
  { orderNumber: 46, fullname: 'David Ward', position: 'Counselor' },
  { orderNumber: 47, fullname: 'Madison Carter', position: 'Auditor' },
  { orderNumber: 48, fullname: 'James Stewart', position: 'Developer' },
  { orderNumber: 49, fullname: 'Sophia Perry', position: 'Manager' },
  { orderNumber: 50, fullname: 'Eva Bennett', position: 'Teacher' },
];

const RearrangeEmployeeOrder = () => {
  return (
    <div className="h-max overflow-x-scroll p-4">
      <div className="flex space-x-4">
        {Array.from(
          { length: Math.ceil(employees.length / 15) },
          (_, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col space-y-2 flex-none"
            >
              {employees
                .slice(columnIndex * 15, (columnIndex + 1) * 15)
                .map((subItem, subIndex) => (
                  <div
                    key={`${columnIndex}-${subIndex}`}
                    className="bg-gray-200 p-2 w-80 flex items-center gap-2 rounded-md hover:cursor-move"
                  >
                    <div className="flex justify-center items-center text-xl w-5 h-10 bg-slate-300 rounded-sm">
                      <GrDrag size={18} className="text-slate-500" />
                    </div>
                    <div className="flex justify-center items-center text-xl w-10 h-10 bg-slate-300 rounded-lg">
                      {subItem.orderNumber}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-slate-700">
                        {subItem.fullname}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {subItem.position}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RearrangeEmployeeOrder;
