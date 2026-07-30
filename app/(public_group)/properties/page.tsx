import PropertySearch from "../_components/property/PropertySearch";
import PropertySection from "../_components/property/PropertySection";

const PropertiesPage = () => {
  return (
    <div className="w-10/12 mx-auto mt-36 mb-24 ">
      <PropertySearch />
      <PropertySection></PropertySection>
    </div>
  );
};

export default PropertiesPage;
