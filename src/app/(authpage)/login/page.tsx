import { LoginFormShdcn } from '@/app/@auth/(components)/LoginFormShdcn';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function LoginPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Admin Pannel</CardTitle>
          <CardDescription>Please enter your credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginFormShdcn />
        </CardContent>
      </Card>
    </div>
  );
}
