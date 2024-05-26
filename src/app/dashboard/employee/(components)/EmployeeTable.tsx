'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/core/redux/hooks';
import { RootState } from '@/core/redux/store';
import employeeApi from '@/modules/employee/employeeApi';
import { EmployeeDataType } from '@/modules/employee/employeeTypes';
import { useEffect } from 'react';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { AsideEmployeeSheet } from '../../(components)/(common)/AsideEmployeeSheet';
import { UpdateEmployeeForm } from './(common)/UpdateEmployeeForm';

// employeeList.sort((a, b) => a.order_by - b.order_by);

export function EmployeeTable() {
  const dispatch = useAppDispatch();
  // blog fetch
  useEffect(() => {
    dispatch(employeeApi.endpoints.getEmployees.initiate());
  }, [dispatch]);

  const employeeList = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getEmployees`]?.data as EmployeeDataType[]
  );

  const handleDelete = (index: number) => {
    if (index) {
      dispatch(employeeApi.endpoints.deleteEmployee.initiate({ id: index }));
    }
    return;
  };

  // console.log(employeeList);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.N.</TableHead>
          <TableHead className="w-[100px]">Order by</TableHead>
          <TableHead>Fullname</TableHead>
          <TableHead>Position</TableHead>
          <TableHead className="text-right">Status</TableHead>
          <TableHead className="text-right">
            {/* {JSON.stringify(employeeList)} */}
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employeeList &&
          employeeList.map((employee, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell className="font-medium">{employee.order}</TableCell>
              <TableCell>{employee.fullname}</TableCell>
              <TableCell>
                {employee.positions?.map((pos) => pos.name)}
              </TableCell>
              <TableCell className="text-right">
                <Badge variant={employee.status ? 'default' : 'destructive'}>
                  {employee.status ? 'In' : 'Out'}
                </Badge>
              </TableCell>
              <TableCell className="flex items-center justify-end gap-2">
                <AsideEmployeeSheet
                  btnClassName="text-slate-400 hover:bg-yellow-100"
                  btnLable={<CiEdit />}
                  btnVariant="outline"
                  btnSize="icon"
                  sheetTitle="Update Employee"
                  sheetDesc="Make changes to Employee. Click save when youre done."
                >
                  <UpdateEmployeeForm data={employee} />
                </AsideEmployeeSheet>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-red-400 hover:bg-red-100"
                  onClick={() => {
                    handleDelete(employee.id!);
                  }}
                >
                  <CiTrash />
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}