import { Suspense } from "react";
import PropertySearch from "../_components/property/PropertySearch";
import PropertySection from "../_components/property/PropertySection";
import Loading from "./loading";
import AdvancedFiltering from "../_components/property/AdvancedFiltering";

const PropertiesPage = async (props: {
  searchParams?: Promise<{
    location?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.location || "";
  return (
    <div className="w-10/12 mx-auto mt-36 mb-24 ">
      <PropertySearch />
      <div className="grid grid-cols-12 gap-8 mt-8 w-full ">
        <div className="col-span-9">
          <Suspense fallback={<Loading />}>
            <PropertySection query={query} />
          </Suspense>
        </div>
        {/* ================= advance searching =========== */}
        <div className="col-span-3 sticky top-36 h-fit bg-amber-100">
          <AdvancedFiltering />
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
