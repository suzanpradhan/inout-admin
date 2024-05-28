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
import { signOut } from 'next-auth/react';
import { AiOutlineLogout } from 'react-icons/ai';

export function AlertLogoutDialog({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This will log you out.</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Button
            variant="link"
            className="p-0 flex items-center text-red-600 hover:text-red-900 group"
            onClick={() => {
              signOut({ callbackUrl: '/login', redirect: true });
            }}
          >
            <span className="inline-block transition-all delay-100 py-4 group-hover:px-4 rounded-2xl group-hover:bg-red-600 group-hover:text-red-200">
              <AiOutlineLogout size={24} />
            </span>
            <span className="flex-1 ms-3 whitespace-nowrap text-base">
              logout
            </span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
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
