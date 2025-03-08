export type AppartementData = {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
};

export type Appartement = {
  id: number;
  floorId: number;
  in_stock: boolean;
  price: string;
  room_count: string;
  square_meter: string;
  coordinates: string;
  image_black_white: string;
  image_design: string;
  createdAt: string | null;
  updatedAt: string | null;
  AppartementData: AppartementData[];
};

export type Floor = {
  id: number;
  floor: number;
  order: number;
  imageUrl: string;
  image_scheme: string;
  createdAt: string | null;
  updatedAt: string | null;
  Appartements: Appartement[];
};
