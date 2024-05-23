import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectInput() {
  return (
    <Select>
      <SelectTrigger className="w-full h-12">
        <SelectValue placeholder="Select a position" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Board Members</SelectLabel>
          <SelectItem value="1">Principle</SelectItem>
          <SelectItem value="2">Vice Principle</SelectItem>
          <SelectItem value="3">Manager</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Staff</SelectLabel>
          <SelectItem value="4">Teacher</SelectItem>
          <SelectItem value="5">Accountant</SelectItem>
          <SelectItem value="6">Receptationist</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
