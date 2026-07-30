import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CategorySelect = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-full text-black">
          <SelectValue placeholder="Category" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="house">House</SelectItem>
          <SelectItem value="villa">Villa</SelectItem>
          <SelectItem value="office">Office</SelectItem>
          <SelectItem value="commercial">Commercial</SelectItem>
          <SelectItem value="plaza">Plaza</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategorySelect;
