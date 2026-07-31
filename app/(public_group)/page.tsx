import Banner from "./_components/home/Banner";
import WhyChooseUs from "./_components/home/ChooseUse";
import HowItWorks from "./_components/home/HowItWorks";
import PropertyList from "./_components/home/PropertyList";
import PropertyServices from "./_components/home/PropertyServices";
import TestimonialSection from "./_components/home/TestimonialSection";

export default async function Home() {
  return (
    <div>
      <Banner />
      <WhyChooseUs />
      <PropertyList />
      <PropertyServices />
      <HowItWorks />
      <TestimonialSection />
    </div>
  );
}
