import StorageTable from "../components/StorageTable";
import StorageInputButtons from "../components/StorageInputButtons";
import StorageSelect from "../components/StorageSelect";

const Storage = () => {
  return (
    <div className="p-8">
      <div className="flex flex-row justify-between mb-2 ">
        <StorageSelect/>
        <StorageInputButtons />
      </div>
      <StorageTable />
    </div>
  );
};

export default Storage;
