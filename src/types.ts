export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  capacity: number;
  size: string;
  bedType: string;
  amenities: string[];
  images: string[];
  featuredImage: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description?: string;
}
