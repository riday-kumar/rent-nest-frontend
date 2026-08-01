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

export type PropertyCardProps = {
  id: string;
  title: string;
  description: string;
  rentAmount: string;
  address: string;
  city: string;
  district: string;
  division: string;
  propertyStatus: string;
  size: number;
  floorType: string;
  bedRoom: number;
  bathroom: number;
  balconies: number;
  livingRoom: boolean;
  drawingRoom: boolean;
  dningRoom: boolean;
  kitchen: number;
  servantRoom: boolean;
  parking: boolean;
  lift: boolean;
  serviceCharge: string;
  images: string[];
  amenities: string[];
  categoryId: number;
  landlordId: string;
  createdAt: string;
  updatedAt: string;
  category: {
    id: number;
    categoryName: string;
  };
  review: string[];
  landlord: {
    name: string;
    email: string;
  };
};

export type PropertyDetails = {
  id: string;
  title: string;
  description: string;
  rentAmount: string;
  address: string;
  city: string;
  district: string;
  division: string;
  propertyStatus: "AVAILABLE" | "RENTED";
  size: number;
  floorType: string;
  bedRoom: number;
  bathroom: number;
  balconies: number;
  livingRoom: boolean;
  drawingRoom: boolean;
  dinningRoom: boolean;
  kitchen: number;
  servantRoom: boolean;
  parking: boolean;
  lift: boolean;
  serviceCharge: string;
  images: string[];
  amenities: string[];
  categoryId: number;
  landlordId: string;
  createdAt: string;
  updatedAt: string;

  category: {
    id: number;
    categoryName: string;
  };

  landlord: {
    id: string;
    name: string;
    email: string;
  };

  review: {
    id: string;
    tenantId: string;
    review: string;
    propertyId: string;
    createdAt: string;
    updatedAt: string;
    tenant: {
      name: string;
    };
  }[];
};

export type User = {
  status: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    role: "TENANT" | "LANDLORD" | "ADMIN";
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
  };
};
