import { Suspense } from "react";
import PropertySearch from "../_components/property/PropertySearch";
import PropertySection from "../_components/property/PropertySection";
import Loading from "./loading";

const PropertiesPage = () => {
  return (
    <div className="w-10/12 mx-auto mt-36 mb-24 ">
      <PropertySearch />
      <Suspense fallback={<Loading />}>
        <PropertySection />
      </Suspense>
    </div>
  );
};

export default PropertiesPage;
