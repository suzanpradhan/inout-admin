import { Button } from '@/components/ui/button';

interface ClickProps {
  onClick: () => void;
}

const UniButton = ({
  variant,
  size,
  classname,
  children,
  onClick,
}: {
  variant:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | null
    | undefined;
  size: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
  classname: string;
  children: React.ReactNode;
  onClick: ClickProps;
}) => {
  return (
    <Button variant={variant} size={size} className={classname}>
      {children}
    </Button>
  );
};

export default UniButton;
