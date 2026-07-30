import { Input } from "@/components/ui/input";
import AdvancedSearch from "./AdvancedSearch";
import { Button } from "@/components/ui/button";
import CategorySelect from "../filters/CategorySelect";
import LocationSelect from "../filters/LocationSelect";

const PropertySearch = () => {
  return (
    <div className="grid grid-cols-12 gap-5 items-center">
      <div className="col-span-4">
        <Input className="h-12" placeholder="Search Property..." />
      </div>

      <form className="col-span-8 grid grid-cols-8 gap-5">
        <div className="col-span-2">
          <CategorySelect />
        </div>

        <div className="col-span-2">
          <LocationSelect />
        </div>

        <div className="col-span-2">
          <AdvancedSearch />
        </div>

        <div className="col-span-2">
          <Button className="w-full h-12">Search</Button>
        </div>
      </form>
    </div>
  );
};

export default PropertySearch;
