import Banner from "./_components/home/Banner";
import WhyChooseUs from "./_components/home/ChooseUse";
import HowItWorks from "./_components/home/HowItWorks";
import PropertyList from "./_components/home/PropertyList";
import PropertyServices from "./_components/home/PropertyServices";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <PropertyList />
      <PropertyServices />
      <HowItWorks />
    </div>
  );
}
