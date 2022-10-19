import { useEffect } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import { SelectLocationProps } from "./types";

export const SelectedLocation = ({
  currentLocation,
  setCurrentLocation,
}: SelectLocationProps) => {
  const map = useMap();

  useEffect(() => {
    if (Object.keys(currentLocation).length) {
      if (map && currentLocation?.latlng) {
        map.flyTo([currentLocation.latlng.lat, currentLocation.latlng.lng]);
      }
    }
  }, [currentLocation, map]);

  useMapEvents({
    click(e) {
      setCurrentLocation({ latlng: e.latlng });
    },
  });

  return null;
};
