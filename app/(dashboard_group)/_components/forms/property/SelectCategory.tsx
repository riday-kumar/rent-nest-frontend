import { gestCategory } from "@/app/(dashboard_group)/_actions/property/getCategory";
import { SelectContent, SelectItem } from "@/components/ui/select";

const SelectCategory = async () => {
  //   const categories = await gestCategory();
  //   console.log("categories", categories);
  return (
    <SelectContent>
      {categories.map((category) => (
        <SelectItem key={category.id} value={category.id}>
          {category.categoryName}
        </SelectItem>
      ))}
    </SelectContent>
  );
};

export default SelectCategory;
