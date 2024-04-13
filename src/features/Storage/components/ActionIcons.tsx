import { Tag, Search, Key, Trash } from "lucide-react";

const ActionIcons = () => {
  return (
    <div className="flex flex-row justify-evenly " >
      <Tag />
      <Search />
      <Key />
      <Trash />
    </div>
  );
};

export default ActionIcons;
