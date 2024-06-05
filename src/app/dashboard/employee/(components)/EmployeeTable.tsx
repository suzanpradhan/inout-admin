'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
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
import { PaginatedResponseType } from '@/core/types/responseTypes';
import employeeApi from '@/modules/employee/employeeApi';
import { EmployeeDataType } from '@/modules/employee/employeeTypes';
import { useEffect, useState } from 'react';
import { CiEdit, CiTrash } from 'react-icons/ci';
import { AlertDeleteDialog } from '../../(components)/(common)/AlertDeleteDialog';
import { AsideEmployeeSheet } from '../../(components)/(common)/AsideEmployeeSheet';
import PaginationLinks from '../../(components)/(common)/PaginationLinks';
import { UpdateEmployeeForm } from './(common)/UpdateEmployeeForm';

// employeeList.sort((a, b) => a.order_by - b.order_by);

export function EmployeeTable() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [updateChecked, setUpdateChecked] = useState(false);
  const [isPage, setIsPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    dispatch(employeeApi.endpoints.getEmployees.initiate(isPage))
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Error fetching employees:', error);
      });
  }, [dispatch, isPage]);

  const paginatedResponse = useAppSelector(
    (state: RootState) =>
      state.baseApi.queries[`getEmployees`]
        ?.data as PaginatedResponseType<EmployeeDataType>
  );

  const handleDelete = (index: number) => {
    if (index) {
      dispatch(employeeApi.endpoints.deleteEmployee.initiate({ id: index }));
    }
    return;
  };

  const onChangedStatus = async (index: number, boolean: boolean) => {
    try {
      await Promise.resolve(
        dispatch(
          employeeApi.endpoints.updateStatus.initiate({
            id: index,
            is_attend: boolean,
          })
        )
      );
    } catch (error) {
      setIsLoading(false);
    }
  };

  const setPageNumber = (newPageNumber: number) => {
    setIsPage(newPageNumber);
  };

  // console.log(paginatedResponse);
  return (
    <>
      {!isLoading ? (
        paginatedResponse && paginatedResponse.results.length > 0 ? (
          <>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">S.N.</TableHead>
                  <TableHead className="w-[100px]">Emp. ID</TableHead>
                  <TableHead className="w-[100px]">Order by</TableHead>
                  <TableHead>Fullname</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                  <TableHead className="w-[200px] text-center">
                    {/* {JSON.stringify(employeeList)} */}
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedResponse?.results &&
                  paginatedResponse.results.map((employee, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell className="font-medium">
                        {employee.id}
                      </TableCell>
                      <TableCell className="font-medium">
                        {employee.order}
                      </TableCell>
                      <TableCell>{employee.fullname}</TableCell>
                      <TableCell>
                        {employee.positions?.map((pos) => pos.name)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            employee.is_attend ? 'default' : 'destructive'
                          }
                        >
                          {employee.is_attend ? 'In' : 'Out'}
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
                        <AlertDeleteDialog
                          handleClick={handleDelete}
                          uid={employee.id!}
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className="text-red-400 hover:bg-red-100"
                          >
                            <CiTrash />
                          </Button>
                        </AlertDeleteDialog>
                        <Switch
                          checked={employee.is_attend}
                          onCheckedChange={(val) => {
                            onChangedStatus(employee.id, val);
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <PaginationLinks
              data={paginatedResponse?.pagination}
              setPageNumber={setPageNumber}
            />
          </>
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
    </>
  );
}
