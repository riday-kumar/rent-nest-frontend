import { Suspense } from "react";
import PropertySearch from "../_components/property/PropertySearch";
import PropertySection from "../_components/property/PropertySection";
import Loading from "./loading";
import AdvancedFiltering from "../_components/property/AdvancedFiltering";

const PropertiesPage = async (props: {
  searchParams?: Promise<{
    location?: string;
    type?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.location || "";
  const type = searchParams?.type || "";
  return (
    <div className=" w-11/12 mx-auto px-4 sm:px-6 lg:px-8 mt-28 lg:mt-36 mb-16 lg:mb-24">
      <PropertySearch />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
        {/* Property List */}
        <div className="lg:col-span-9 order-2 lg:order-1">
          <Suspense fallback={<Loading />}>
            <PropertySection query={query} type={type} />
          </Suspense>
        </div>

        {/* Advanced Filtering */}
        <div className="lg:col-span-3 order-1 lg:order-2">
          <div className="lg:sticky lg:top-20">
            <AdvancedFiltering />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
