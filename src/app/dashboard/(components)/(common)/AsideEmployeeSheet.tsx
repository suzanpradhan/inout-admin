import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export function AsideEmployeeSheet({
  btnVariant,
  btnClassName,
  btnLable,
  btnSize,
  sheetTitle,
  sheetDesc,
  children,
}: {
  btnVariant?:
    | 'link'
    | 'default'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | null
    | undefined;
  btnClassName?: string;
  btnLable?: string | React.JSX.Element;
  btnSize?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  sheetTitle?: string;
  sheetDesc?: string;
  children?: React.ReactNode;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={btnVariant ?? 'outline'}
          className={`${btnClassName}`}
          size={btnSize ?? 'icon'}
        >
          {btnLable ?? 'Open'}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{sheetTitle}</SheetTitle>
          <SheetDescription>{sheetDesc}</SheetDescription>
        </SheetHeader>
        <Separator className="my-5" />
        {children}
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline" className="my-2 w-full h-12">
              Cancel
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
