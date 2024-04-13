import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StorageButtonProps {
  name: string;
}

const StorageButton = ({ name }: StorageButtonProps) => {
  return (
    <Button className="bg-lime-500 rounded-full " variant="ghost">
      {name}
    </Button>
  );
};

const StorageInputButtons = () => {
  return (
    <div className="flex flex-row justify-evenly text-white gap-10">
      <Input className="rounded-full" type="search" placeholder="Search" />
      <StorageButton name="Billing Trend" />
      <StorageButton name="Quantity Trend" />
      <StorageButton name="Create Storage Account" />
    </div>
  );
};

export default StorageInputButtons;
