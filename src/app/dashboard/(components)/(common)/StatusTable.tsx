import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const invoices = [
  {
    fullname: 'Niwesh Shrestha',
    timestamp: '10:30 am - Fri, May 23',
    status: 1,
  },
  {
    fullname: 'Saroj Khanal',
    timestamp: '11:05 am - Fri, May 23',
    status: 1,
  },
  {
    fullname: 'Sujan Pradhan',
    timestamp: '04:30 am - Fri, May 23',
    status: 0,
  },
  {
    fullname: 'Pratik Joshi',
    timestamp: '10:30 am - Fri, May 23',
    status: 1,
  },
  {
    fullname: 'Avishek Dahal',
    timestamp: '10:30 am - Fri, May 23',
    status: 1,
  },
  {
    fullname: 'Basant Bushal',
    timestamp: '10:30 am - Fri, May 23',
    status: 1,
  },
  {
    fullname: 'Surakhxa Mishra',
    timestamp: '10:30 am - Fri, May 23',
    status: 1,
  },
  {
    fullname: 'Dol Raj Ghimire',
    timestamp: '10:30 am - Fri, May 23',
    status: 0,
  },
];

export function StatusTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Fullname</TableHead>
          <TableHead>Activity at</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index) => (
          <TableRow
            key={index}
            className={invoice.status ? 'bg-green-50' : 'bg-red-50'}
          >
            <TableCell>{invoice.fullname}</TableCell>
            <TableCell>{invoice.timestamp}</TableCell>
            <TableCell className="text-right">
              <Badge variant={invoice.status ? 'default' : 'destructive'}>
                {invoice.status ? 'In' : 'Out'}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
