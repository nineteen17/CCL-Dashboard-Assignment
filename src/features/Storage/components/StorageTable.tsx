import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { storageData } from "../storageData";
import ActionIcons from "./ActionIcons";
const StorageTable = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Storage Account</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Access Key</TableHead>
            <TableHead>Bucket Count</TableHead>
            <TableHead>Size (GB)</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {storageData.map((item, index) => (
            <TableRow key={index}>
              {Object.values(item).map((value, i) => (
                <TableCell key={i}>
                  {typeof value === "number" ? value.toLocaleString() : value}
                </TableCell>
              ))}
              <TableCell className="text-right">
                <ActionIcons />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default StorageTable;
