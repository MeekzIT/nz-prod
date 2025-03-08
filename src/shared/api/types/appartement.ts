export interface AppartementDatum {
  id: number;
  name: string;
  value: string;
  appartementId: number;
  createdAt: string | null;
  updatedAt: string | null;
}

export interface IAppartement {
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
  AppartementData: AppartementDatum[];
}
