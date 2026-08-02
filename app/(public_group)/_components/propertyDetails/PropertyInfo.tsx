import { Card, CardContent } from "@/components/ui/card";
import { PropertyDetails } from "@/lib/types";
import {
  Bath,
  BedDouble,
  Building2,
  Car,
  CookingPot,
  Home,
  Sofa,
  Square,
  Users,
} from "lucide-react";

type InfoProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

const PropertyInfo = ({ property }: { property: PropertyDetails }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-5">Property Information</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Info icon={<Square />} title="Size">
          {property.size} sqft
        </Info>

        <Info icon={<Building2 />} title="Floor">
          {property.floorType}
        </Info>

        <Info icon={<BedDouble />} title="Bedrooms">
          {property.bedRoom}
        </Info>

        <Info icon={<Bath />} title="Bathrooms">
          {property.bathroom}
        </Info>

        <Info icon={<Home />} title="Balconies">
          {property.balconies}
        </Info>

        <Info icon={<CookingPot />} title="Kitchen">
          {property.kitchen}
        </Info>

        <Info icon={<Sofa />} title="Living Room">
          {property.livingRoom ? "Yes" : "No"}
        </Info>

        <Info icon={<Users />} title="Drawing Room">
          {property.drawingRoom ? "Yes" : "No"}
        </Info>

        <Info icon={<Home />} title="Dining Room">
          {property.dinningRoom ? "Yes" : "No"}
        </Info>

        <Info icon={<Car />} title="Parking">
          {property.parking ? "Available" : "No"}
        </Info>

        <Info icon={<Building2 />} title="Lift">
          {property.lift ? "Available" : "No"}
        </Info>

        <Info icon={<Home />} title="Service Charge">
          ৳ {property.serviceCharge}
        </Info>
      </div>
    </div>
  );
};

function Info({ icon, title, children }: InfoProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="text-primary">{icon}</div>

        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <p className="font-semibold">{children}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default PropertyInfo;
