import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BathroomSelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full text-black">
          <SelectValue placeholder="Select Bathroom" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5</SelectItem>
          <SelectItem value="6">6</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BathroomSelect;
