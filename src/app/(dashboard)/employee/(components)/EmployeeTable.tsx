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
import { CiEdit, CiTrash } from 'react-icons/ci';
import { AsideEmployeeSheet } from '../../(components)/(common)/AsideEmployeeSheet';
import { UpdateEmployeeForm } from './(common)/UpdateEmployeeForm';

const employeeList = [
  {
    order_by: 3,
    fullname: 'Niwesh Shrestha',
    position: 'Teacher',
    status: 1,
  },
  {
    order_by: 2,
    fullname: 'Saroj Khanal',
    position: 'Vice Principle',
    status: 1,
  },
  {
    order_by: 4,
    fullname: 'Sujan Pradhan',
    position: 'Teacher',
    status: 0,
  },
  {
    order_by: 5,
    fullname: 'Pratik Joshi',
    position: 'Administrator',
    status: 1,
  },
  {
    order_by: 6,
    fullname: 'Avishek Dahal',
    position: 'Teacher',
    status: 1,
  },
  {
    order_by: 7,
    fullname: 'Basant Bushal',
    position: 'Accountant',
    status: 1,
  },
  {
    order_by: 8,
    fullname: 'Surakhxa Mishra',
    position: 'Primary Teacher',
    status: 1,
  },
  {
    order_by: 1,
    fullname: 'Dol Raj Ghimire',
    position: 'Principle',
    status: 0,
  },
];

employeeList.sort((a, b) => a.order_by - b.order_by);

export function EmployeeTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.N.</TableHead>
          <TableHead className="w-[100px]">Order by</TableHead>
          <TableHead>Fullname</TableHead>
          <TableHead>Position</TableHead>
          <TableHead className="text-right">Status</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {employeeList.map((employee, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell className="font-medium">{employee.order_by}</TableCell>
            <TableCell>{employee.fullname}</TableCell>
            <TableCell>{employee.position}</TableCell>
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
                <UpdateEmployeeForm />
              </AsideEmployeeSheet>
              <Button
                variant="outline"
                size="icon"
                className="text-red-400 hover:bg-red-100"
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
