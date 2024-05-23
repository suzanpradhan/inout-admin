import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const invoices = [
  {
    fullname: 'Niwesh Shrestha',
    position: 'Teacher',
    status: 1,
  },
  {
    fullname: 'Saroj Khanal',
    position: 'Vice Principle',
    status: 1,
  },
  {
    fullname: 'Sujan Pradhan',
    position: 'Teacher',
    status: 0,
  },
  {
    fullname: 'Pratik Joshi',
    position: 'Administrator',
    status: 1,
  },
  {
    fullname: 'Avishek Dahal',
    position: 'Teacher',
    status: 1,
  },
  {
    fullname: 'Basant Bushal',
    position: 'Accountant',
    status: 1,
  },
  {
    fullname: 'Surakhxa Mishra',
    position: 'Primary Teacher',
    status: 1,
  },
  {
    fullname: 'Dol Raj Ghimire',
    position: 'Principle',
    status: 0,
  },
];

export function NormalTable() {
  return (
    <Table>
      <TableCaption className="py-2">
        <Link href="" className="block">
          View full employee list
        </Link>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S.N.</TableHead>
          <TableHead>Fullname</TableHead>
          <TableHead>Position</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{invoice.fullname}</TableCell>
            <TableCell>{invoice.position}</TableCell>
            <TableCell className="text-right">
              <Badge variant={invoice.status ? 'default' : 'destructive'}>
                {invoice.status ? 'In' : 'Out'}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        {/* <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow> */}
      </TableFooter>
    </Table>
  );
}
