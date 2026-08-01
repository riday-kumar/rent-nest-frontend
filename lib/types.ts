export type PropertyFormValues = {
  title: string;
  description: string;

  rentAmount: string;

  address: string;
  city: string;
  district: string;
  division: string;

  size: string;

  floorType: string;
  bedRoom: string;
  bathroom: string;
  balconies: string;
  kitchen: string;

  livingRoom: boolean;
  drawingRoom: boolean;
  dinningRoom: boolean;
  servantRoom: boolean;
  parking: boolean;
  lift: boolean;

  serviceCharge: string;

  images: string;

  amenities: string[];

  categoryId: string;
};
export type PropertyFormUpdateValues = {
  id: string;
  title: string;
  description: string;

  rentAmount: string;

  address: string;
  city: string;
  district: string;
  division: string;

  size: string;

  floorType: string;
  bedRoom: string;
  bathroom: string;
  balconies: string;
  kitchen: string;

  livingRoom: boolean;
  drawingRoom: boolean;
  dinningRoom: boolean;
  servantRoom: boolean;
  parking: boolean;
  lift: boolean;

  serviceCharge: string;

  images: string[];

  amenities: string[];

  categoryId: string;
};

export type PropertyPayload = Omit<
  PropertyFormValues,
  "images" | "amenities" | "categoryId"
> & {
  images: string[];
  amenities: string[];
  categoryId: number;
  id?: string;
};
