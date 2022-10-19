import { Product } from "../../../../store/types";

export interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | undefined>>
  selectedProduct: Product | undefined
}

export interface SelectLocationProps {
  currentLocation: LocationType;
  setCurrentLocation: React.Dispatch<React.SetStateAction<LocationType>>;
}

export interface LocationType {
  latlng: {
    lat: number;
    lng: number;
  };
}
