import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useOrderStore } from "../../../../store";
import { SelectedLocation } from "./SelectLocation";
import { LocationType, MapModalProps } from "./types";

const MapModal = ({
  isOpen,
  onClose,
  setSelectedProduct,
  selectedProduct,
}: MapModalProps) => {
  const { buyProduct } = useOrderStore((state) => state);

  const [currentLocation, setCurrentLocation] = useState<LocationType>({
    latlng: { lat: 35.7219, lng: 51.3347 },
  });

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MapContainer
              style={{ width: "100%", height: "500px" }}
              center={[35.7219, 51.3347]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[
                  currentLocation.latlng.lat,
                  currentLocation.latlng.lng,
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <SelectedLocation
                currentLocation={currentLocation}
                setCurrentLocation={setCurrentLocation}
              />
            </MapContainer>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                onClose();
                if (selectedProduct) {
                  buyProduct({
                    image: selectedProduct?.image,
                    price: selectedProduct.price,
                    title: selectedProduct.title,
                    location: {
                      lat: currentLocation.latlng.lat,
                      lng: currentLocation.latlng.lng,
                    },
                  });
                }
              }}
            >
              تایید
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MapModal;
