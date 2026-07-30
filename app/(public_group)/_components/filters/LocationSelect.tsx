import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LocationSelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full text-black">
          <SelectValue placeholder="Location" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="dhaka">Dhaka</SelectItem>
          <SelectItem value="narayanganj">Narayanganj</SelectItem>
          <SelectItem value="rajshahi">Rajshahi</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationSelect;
