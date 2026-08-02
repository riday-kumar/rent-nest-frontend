"use client";
import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PropertySearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // =============handle search (search by location)===============
  const handleSearch = useDebouncedCallback((term: string) => {
    // console.log(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("location", term);
    } else {
      params.delete("location");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
      {/* Search Input */}
      <div className="lg:col-span-4">
        <Input
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
          className="h-12 w-full"
          placeholder="Search by location..."
        />
      </div>
    </div>
  );
};

export default PropertySearch;
