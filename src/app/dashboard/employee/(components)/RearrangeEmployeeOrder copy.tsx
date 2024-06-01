'use client';
import { useAppDispatch } from '@/core/redux/hooks';
import React, { useState } from 'react';
import { GrDrag } from 'react-icons/gr';
import DropArea from './(common)/DropArea';
interface Employee {
  id: number;
  orderNumber: number;
  fullname: string;
  position: string;
}

const employees: Employee[] = [
  { id: 1, orderNumber: 1, fullname: 'John Smith', position: 'Principal' },
  { id: 2, orderNumber: 2, fullname: 'Jane Johnson', position: 'Accountant' },
  { id: 3, orderNumber: 3, fullname: 'Alex Williams', position: 'Teacher' },
  { id: 4, orderNumber: 4, fullname: 'Chris Brown', position: 'Manager' },
  { id: 5, orderNumber: 5, fullname: 'Katie Jones', position: 'Engineer' },
  { id: 6, orderNumber: 6, fullname: 'Michael Garcia', position: 'Developer' },
  { id: 7, orderNumber: 7, fullname: 'Sarah Miller', position: 'Designer' },
  { id: 8, orderNumber: 8, fullname: 'David Davis', position: 'Coordinator' },
  { id: 9, orderNumber: 9, fullname: 'Laura Rodriguez', position: 'Analyst' },
  {
    id: 10,
    orderNumber: 10,
    fullname: 'Robert Martinez',
    position: 'Specialist',
  },
  { id: 11, orderNumber: 11, fullname: 'Emily Taylor', position: 'Supervisor' },
  {
    id: 12,
    orderNumber: 12,
    fullname: 'William Anderson',
    position: 'Administrator',
  },
  { id: 13, orderNumber: 13, fullname: 'Sophia Thomas', position: 'Assistant' },
  {
    id: 14,
    orderNumber: 14,
    fullname: 'Daniel Hernandez',
    position: 'Technician',
  },
  { id: 15, orderNumber: 15, fullname: 'Olivia Lopez', position: 'Counselor' },
  { id: 16, orderNumber: 16, fullname: 'James Lee', position: 'Auditor' },
  {
    id: 17,
    orderNumber: 17,
    fullname: 'Isabella Gonzalez',
    position: 'Coordinator',
  },
  {
    id: 18,
    orderNumber: 18,
    fullname: 'Benjamin Wilson',
    position: 'Developer',
  },
  { id: 19, orderNumber: 19, fullname: 'Emma Moore', position: 'Manager' },
  { id: 20, orderNumber: 20, fullname: 'Lucas Taylor', position: 'Teacher' },
  { id: 21, orderNumber: 21, fullname: 'Avery Clark', position: 'Accountant' },
  { id: 22, orderNumber: 22, fullname: 'Mia Lewis', position: 'Principal' },
  { id: 23, orderNumber: 23, fullname: 'Ethan Hall', position: 'Engineer' },
  {
    id: 24,
    orderNumber: 24,
    fullname: 'Harper Rodriguez',
    position: 'Designer',
  },
  { id: 25, orderNumber: 25, fullname: 'Alexander Lewis', position: 'Analyst' },
  { id: 26, orderNumber: 26, fullname: 'Ella White', position: 'Supervisor' },
  { id: 27, orderNumber: 27, fullname: 'Logan Perez', position: 'Specialist' },
  { id: 28, orderNumber: 28, fullname: 'Amelia King', position: 'Coordinator' },
  { id: 29, orderNumber: 29, fullname: 'Jacob Scott', position: 'Assistant' },
  {
    id: 30,
    orderNumber: 30,
    fullname: 'Abigail Young',
    position: 'Technician',
  },
  // { id: 31, orderNumber: 31, fullname: 'Mason Green', position: 'Counselor' },
  // { id: 32, orderNumber: 32, fullname: 'Charlotte Hill', position: 'Auditor' },
  // { id: 33, orderNumber: 33, fullname: 'Liam Baker', position: 'Developer' },
  // { id: 34, orderNumber: 34, fullname: 'Ava Adams', position: 'Manager' },
  // { id: 35, orderNumber: 35, fullname: 'Noah Ward', position: 'Teacher' },
  // {
  //   id: 36,
  //   orderNumber: 36,
  //   fullname: 'Elizabeth King',
  //   position: 'Accountant',
  // },
  // {
  //   id: 37,
  //   orderNumber: 37,
  //   fullname: 'William Hughes',
  //   position: 'Principal',
  // },
  // { id: 38, orderNumber: 38, fullname: 'Sofia Foster', position: 'Engineer' },
  // { id: 39, orderNumber: 39, fullname: 'Ethan Russell', position: 'Designer' },
  // { id: 40, orderNumber: 40, fullname: 'Grace Coleman', position: 'Analyst' },
  // {
  //   id: 41,
  //   orderNumber: 41,
  //   fullname: 'Michael Morris',
  //   position: 'Supervisor',
  // },
  // { id: 42, orderNumber: 42, fullname: 'Avery Diaz', position: 'Specialist' },
  // { id: 43, orderNumber: 43, fullname: 'Ella Bailey', position: 'Coordinator' },
  // {
  //   id: 44,
  //   orderNumber: 44,
  //   fullname: 'Matthew Powell',
  //   position: 'Assistant',
  // },
  // {
  //   id: 45,
  //   orderNumber: 45,
  //   fullname: 'Scarlett Murphy',
  //   position: 'Technician',
  // },
  // { id: 46, orderNumber: 46, fullname: 'David Ward', position: 'Counselor' },
  // { id: 47, orderNumber: 47, fullname: 'Madison Carter', position: 'Auditor' },
  // { id: 48, orderNumber: 48, fullname: 'James Stewart', position: 'Developer' },
  // { id: 49, orderNumber: 49, fullname: 'Sophia Perry', position: 'Manager' },
  // { id: 50, orderNumber: 50, fullname: 'Eva Bennett', position: 'Teacher' },
];

interface SwitchAction {
  id: number;
  order: number;
}

const RearrangeEmployeeOrder = () => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [switchActions, setSwitchActions] = useState<SwitchAction[]>([]);
  const [employeeList, setEmployeeList] = useState<Employee[]>(employees);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const rowPerC0ols: number = 5;

  const onDrop = (position: number) => {
    if (activeCard == null) return;

    const draggedObject = employeeList[activeCard];
    const currentPositionedObject = employeeList[position];

    if (draggedObject && currentPositionedObject) {
      const updatedEmployeeList = [...employeeList];
      const draggedIndex = employeeList.findIndex(
        (emp) => emp.id === draggedObject.id
      );
      const currentPositionedIndex = employeeList.findIndex(
        (emp) => emp.id === currentPositionedObject.id
      );

      updatedEmployeeList[draggedIndex] = currentPositionedObject;
      updatedEmployeeList[currentPositionedIndex] = draggedObject;

      const newSwitchAction: SwitchAction = {
        id: draggedObject.id,
        order: currentPositionedIndex,
      };

      setSwitchActions((prevActions) => [...prevActions, newSwitchAction]);
      // setSwitchActions(() => [newSwitchAction]);

      setEmployeeList(updatedEmployeeList);
    }
  };

  return (
    <div className="h-max overflow-x-scroll p-4">
      <div className="flex space-x-4">
        <h2>Active card: {activeCard}</h2>
        {/* <button onClick={updateData}>update</button> */}
        {Array.from(
          { length: Math.ceil(employeeList.length / rowPerC0ols) },
          (_, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col space-y-2 flex-none"
            >
              {/* <DropArea onDrop={() => onDrop(columnIndex * rowPerC0ols)} /> */}
              {employeeList
                .slice(
                  columnIndex * rowPerC0ols,
                  (columnIndex + 1) * rowPerC0ols
                )
                .map((subItem, subIndex) => (
                  <React.Fragment key={`${columnIndex}-${subIndex}`}>
                    <DropArea
                      onDrop={() =>
                        onDrop(columnIndex * rowPerC0ols + subIndex)
                      }
                    />
                    <div
                      key={`${columnIndex}-${subIndex}`}
                      className="bg-gray-200 p-2 w-80 flex items-center gap-2 rounded-md hover:cursor-move active:opacity-45"
                      draggable
                      onDragStart={() =>
                        setActiveCard(columnIndex * rowPerC0ols + subIndex)
                      }
                      onDragEnd={() => setActiveCard(null)}
                    >
                      <div className="flex justify-center items-center text-xl w-5 h-10 bg-slate-300 rounded-sm">
                        <GrDrag size={18} className="text-slate-500" />
                      </div>
                      <div className="flex justify-center items-center text-xl w-10 h-10 bg-slate-300 rounded-lg">
                        {columnIndex * rowPerC0ols + subIndex + 1}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-slate-700">
                          {subItem.fullname} | {subItem.orderNumber}
                        </h3>
                        <p className="text-xs text-slate-500">
                          {subItem.position}
                        </p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default RearrangeEmployeeOrder;
