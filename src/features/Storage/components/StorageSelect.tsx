import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StorageSelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Vault" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Vault">Vault</SelectItem>
          <SelectItem value="Vault">Vault</SelectItem>
          <SelectItem value="Vault">Vault</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default StorageSelect;
