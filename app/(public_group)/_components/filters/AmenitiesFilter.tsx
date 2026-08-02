import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

type Amenity = {
  id: string;
  name: string;
};

type Props = {
  amenities: Amenity[];
  selectedAmenities: string[];
  onAmenityChange: (amenity: string, checked: boolean) => void;
};

export default function AmenitiesFilter({
  amenities,
  selectedAmenities,
  onAmenityChange,
}: Props) {
  return (
    <Card className="sticky top-40">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Amenities</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {amenities.map((amenity) => (
          <label
            key={amenity.id}
            className="flex items-center justify-between rounded-md border p-3 cursor-pointer hover:bg-muted transition-colors"
          >
            <div className="flex items-center gap-3">
              <Checkbox
                checked={selectedAmenities.includes(amenity.name)}
                onCheckedChange={(checked) =>
                  onAmenityChange(amenity.name, checked === true)
                }
              />

              <span className="text-sm font-medium">{amenity.name}</span>
            </div>
          </label>
        ))}
      </CardContent>
    </Card>
  );
}
