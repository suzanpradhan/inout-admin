import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { TiTick } from 'react-icons/ti';

export function AlertDeleteDialog({
  children,
  handleClick,
  uid,
}: {
  children: React.ReactNode;
  handleClick: Function;
  uid: number;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This will remove selected employee.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-between">
          <DialogClose asChild>
            <Button
              variant="link"
              className="p-0 flex items-center text-green-600 hover:text-green-900 group"
              onClick={() => {
                handleClick(uid);
              }}
              type="button"
            >
              <span className="inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-green-600 group-hover:text-green-200">
                <TiTick size={24} />
              </span>
              <span className="flex-1 ms-3 whitespace-nowrap text-base">
                Proceed
              </span>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
