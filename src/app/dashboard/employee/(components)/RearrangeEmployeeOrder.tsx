'use client';
import { Button } from '@/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import employeeApi from '@/modules/employee/employeeApi';
import { EmployeeDataType } from '@/modules/employee/employeeTypes';
import React, { useEffect, useRef, useState } from 'react';
import { GrDrag } from 'react-icons/gr';
import { toast } from 'react-toastify';
import DropArea from './(common)/DropArea';

// interface Employee {
//   id: number;
//   orderNumber: number;
//   fullname: string;
//   position: string;
// }

// const employees: Employee[] = [
//   { id: 1, orderNumber: 1, fullname: 'John Smith', position: 'Principal' },
//   { id: 2, orderNumber: 2, fullname: 'Jane Johnson', position: 'Accountant' },
//   { id: 3, orderNumber: 3, fullname: 'Alex Williams', position: 'Teacher' },
//   { id: 4, orderNumber: 4, fullname: 'Chris Brown', position: 'Manager' },
//   { id: 5, orderNumber: 5, fullname: 'Katie Jones', position: 'Engineer' },
//   { id: 6, orderNumber: 6, fullname: 'Michael Garcia', position: 'Developer' },
//   { id: 7, orderNumber: 7, fullname: 'Sarah Miller', position: 'Designer' },
//   { id: 8, orderNumber: 8, fullname: 'David Davis', position: 'Coordinator' },
//   { id: 9, orderNumber: 9, fullname: 'Laura Rodriguez', position: 'Analyst' },
//   {
//     id: 10,
//     orderNumber: 10,
//     fullname: 'Robert Martinez',
//     position: 'Specialist',
//   },
//   { id: 11, orderNumber: 11, fullname: 'Emily Taylor', position: 'Supervisor' },
//   {
//     id: 12,
//     orderNumber: 12,
//     fullname: 'William Anderson',
//     position: 'Administrator',
//   },
//   { id: 13, orderNumber: 13, fullname: 'Sophia Thomas', position: 'Assistant' },
//   {
//     id: 14,
//     orderNumber: 14,
//     fullname: 'Daniel Hernandez',
//     position: 'Technician',
//   },
//   { id: 15, orderNumber: 15, fullname: 'Olivia Lopez', position: 'Counselor' },
//   { id: 16, orderNumber: 16, fullname: 'James Lee', position: 'Auditor' },
//   {
//     id: 17,
//     orderNumber: 17,
//     fullname: 'Isabella Gonzalez',
//     position: 'Coordinator',
//   },
//   {
//     id: 18,
//     orderNumber: 18,
//     fullname: 'Benjamin Wilson',
//     position: 'Developer',
//   },
//   { id: 19, orderNumber: 19, fullname: 'Emma Moore', position: 'Manager' },
//   { id: 20, orderNumber: 20, fullname: 'Lucas Taylor', position: 'Teacher' },
//   { id: 21, orderNumber: 21, fullname: 'Avery Clark', position: 'Accountant' },
//   { id: 22, orderNumber: 22, fullname: 'Mia Lewis', position: 'Principal' },
//   { id: 23, orderNumber: 23, fullname: 'Ethan Hall', position: 'Engineer' },
//   {
//     id: 24,
//     orderNumber: 24,
//     fullname: 'Harper Rodriguez',
//     position: 'Designer',
//   },
//   { id: 25, orderNumber: 25, fullname: 'Alexander Lewis', position: 'Analyst' },
//   { id: 26, orderNumber: 26, fullname: 'Ella White', position: 'Supervisor' },
//   { id: 27, orderNumber: 27, fullname: 'Logan Perez', position: 'Specialist' },
//   { id: 28, orderNumber: 28, fullname: 'Amelia King', position: 'Coordinator' },
//   { id: 29, orderNumber: 29, fullname: 'Jacob Scott', position: 'Assistant' },
//   {
//     id: 30,
//     orderNumber: 30,
//     fullname: 'Abigail Young',
//     position: 'Technician',
//   },
// ];

interface SwitchAction {
  id: number;
  order: number;
}

const RearrangeEmployeeOrder = () => {
  const dispatch = useAppDispatch();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [switchActions, setSwitchActions] = useState<SwitchAction[]>([]);
  const [employeeList, setEmployeeList] = useState<EmployeeDataType[]>([]);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const rowPerCols: number = 5;

  const getAllEmployeesResponse = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getAllEmployees`]?.data as EmployeeDataType[]
  );

  // fetch employee
  useEffect(() => {
    setIsLoading(true);
    dispatch(employeeApi.endpoints.getAllEmployees.initiate())
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error fetching employees:', error);
      });
    setEmployeeList(getAllEmployeesResponse);
  }, [dispatch, getAllEmployeesResponse]);

  // useEffect(() => {
  //   setIsLoading(true);
  //   dispatch(employeeApi.endpoints.getEmployees.initiate(isPage))
  //     .then(() => {
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       console.error('Error fetching employees:', error);
  //     });
  // }, [dispatch, isPage]);

  // Drop function
  const onDrop = (position: number) => {
    if (activeCard == null) return;

    console.log('action', `card no. ${activeCard} is placed into ${position}`);

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

      const draggedPositionAction: SwitchAction = {
        id: draggedObject.id,
        order: currentPositionedIndex,
      };

      const currentPositionAction: SwitchAction = {
        id: currentPositionedObject.id,
        order: draggedIndex,
      };

      // setSwitchActions((prevActions) => [
      //   ...prevActions,
      //   dragedPositionAction,
      //   currentPositionAction,
      // ]);

      setSwitchActions((prevActions) => {
        // Check if there are any matching id
        let foundMatch = false;
        const updatedActions = prevActions.map((action) => {
          if (action.id === draggedPositionAction.id) {
            foundMatch = true;
            return draggedPositionAction;
          } else if (action.id === currentPositionAction.id) {
            foundMatch = true;
            return currentPositionAction;
          } else {
            return action;
          }
        });
        // If no match found, add the actions to the array
        if (!foundMatch) {
          updatedActions.push(draggedPositionAction);
          updatedActions.push(currentPositionAction);
        }

        return updatedActions;
      });

      setEmployeeList(updatedEmployeeList);

      console.log('switch action data: ', switchActions);
    }
  };

  const updateData = async () => {
    setIsLoading(true);
    try {
      await dispatch(employeeApi.endpoints.updateOrder.initiate(switchActions));
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error('Update failed:', error);
      toast.error('Failed updating employee order.');
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleWheel = (event: WheelEvent) => {
        if (event.deltaY !== 0) {
          event.preventDefault();
          scrollContainer.scrollLeft += event.deltaY;
        }
      };

      scrollContainer.addEventListener('wheel', handleWheel);

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);

  return (
    <>
      <h4 className="text-md font-medium text-slate-400 mb-4 flex justify-between items-center">
        Drag and drop to rearrange employee order
        <Button onClick={updateData} variant={'default'} size={'sm'}>
          {isLoading ? (
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            'Update Order'
          )}
        </Button>
      </h4>
      <div className="bg-slate-50 rounded-md shadow-md p-4">
        <div className="h-max overflow-x-scroll pb-4" ref={scrollContainerRef}>
          <div className="flex space-x-4">
            {!isLoading ? (
              employeeList && employeeList.length > 0 ? (
                Array.from(
                  { length: Math.ceil(employeeList.length / rowPerCols) },
                  (_, columnIndex) => (
                    <div
                      key={columnIndex}
                      className="flex flex-col space-y-2 flex-none"
                    >
                      <DropArea
                        onDrop={() => onDrop(columnIndex * rowPerCols)}
                      />
                      {employeeList
                        .slice(
                          columnIndex * rowPerCols,
                          (columnIndex + 1) * rowPerCols
                        )
                        .map((subItem, subIndex) => (
                          <React.Fragment key={`${columnIndex}-${subIndex}`}>
                            <DropArea
                              onDrop={() =>
                                onDrop(columnIndex * rowPerCols + subIndex)
                              }
                            />
                            <div
                              key={`${columnIndex}-${subIndex}`}
                              className="bg-gray-200 p-2 w-80 flex items-center gap-2 rounded-md hover:cursor-move active:opacity-45"
                              draggable
                              onDragStart={() =>
                                setActiveCard(
                                  columnIndex * rowPerCols + subIndex
                                )
                              }
                              onDragEnd={() => setActiveCard(null)}
                            >
                              <div className="flex justify-center items-center text-xl w-5 h-10 bg-slate-300 rounded-sm">
                                <GrDrag size={18} className="text-slate-500" />
                              </div>
                              <div className="flex justify-center items-center text-xl w-10 h-10 bg-slate-300 rounded-lg">
                                {/* {columnIndex * rowPerCols + subIndex + 1} */}
                                {subItem.order}
                              </div>
                              <div>
                                <h3 className="text-base font-semibold text-slate-700">
                                  {subItem.fullname} | empId: {subItem.id}
                                </h3>
                                <p className="text-xs text-slate-500">
                                  {subItem.positions?.map((pos) => pos.name)}
                                </p>
                              </div>
                            </div>
                          </React.Fragment>
                        ))}
                    </div>
                  )
                )
              ) : (
                <p className="text-md font-bold text-slate-900 text-center">
                  !No Data Found!
                </p>
              )
            ) : (
              <p className="text-md font-bold text-slate-900 text-center">
                <div className="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RearrangeEmployeeOrder;
