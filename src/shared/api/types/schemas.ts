export interface IAvailable {
  floor: number;
  count: number;
}

interface IAppartementData {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
}

interface IAppartement {
  id: number;
  in_stock: boolean;
  price: string;
  floorId: number;
  room_count: string;
  square_meter: string;
  image_black_white: string;
  image_design: string;
  coordinates: string;
  createdAt: string | null;
  updatedAt: string | null;
  AppartementData: IAppartementData[];
}

export interface IFloor {
  id: number;
  floor: number;
  order: number;
  image_scheme: string;
  width: string;
  height: string;
  createdAt: string | null;
  updatedAt: string | null;
  imageUrl: string;
  Appartements: IAppartement[];
}
