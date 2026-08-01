import { Suspense } from "react";
import SinglePropertyDetails from "../../_components/propertyDetails/SinglePropertyDetails";
import Loading from "./loading";

// const property = {
//   title: "Hridoy new Apartment",
//   description:
//     "A spacious and well-ventilated apartment located in a peaceful neighborhood. Close to schools, hospitals, shopping malls, and public transportation. Ideal for families looking for a comfortable lifestyle.",

//   rentAmount: 20000,

//   address: "Tanbazar",
//   city: "Narayanganj",
//   district: "Narayanganj",
//   division: "Dhaka",

//   size: 1450,
//   floorType: "5th Floor",

//   bedRoom: 3,
//   bathroom: 2,
//   balconies: 2,

//   livingRoom: true,
//   drawingRoom: true,
//   dinningRoom: true,

//   kitchen: 1,

//   servantRoom: false,

//   parking: true,
//   lift: true,

//   serviceCharge: 3000,

//   images: [
//     "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200",
//     "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1200",
//     "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200",
//   ],

//   amenities: ["WiFi", "Generator", "Security", "Gas", "CCTV"],

//   categoryName: "Flat",
// };

export default async function PropertyDetails({
  params,
}: PageProps<"/properties/[id]">) {
  const { id } = await params;
  return (
    <Suspense fallback={<Loading />}>
      <SinglePropertyDetails id={id} />
    </Suspense>
  );
}
