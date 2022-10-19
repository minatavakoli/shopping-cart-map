import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useOrderStore } from "../../store";

const Orders = () => {
  const { orders } = useOrderStore((state) => state);

  return (
    <div>
      <SimpleGrid mt="40px" columns={2} spacing={10} width="1200px" mx="auto">
        {orders.map((item) => {
          return (
            <Box border="1px solid #eee" borderRadius="10px" padding={"1rem"}>
              <Flex justifyContent={"space-between"} alignItems='center'>
                <Flex flexDirection={"column"} width='300px'>
                  <Text>{item.title}</Text>
                  <Text>$ {item.price}</Text>
                  {item.location && (
                    <MapContainer
                      style={{
                        width: "100%",
                        height: "150px",
                        marginTop: "1rem",
                      }}
                      center={[item.location?.lat, item.location?.lng]}
                      zoom={13}
                      scrollWheelZoom={true}
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker
                        position={[item.location?.lat, item.location?.lng]}
                      >
                        <Popup>
                          A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>
                    </MapContainer>
                  )}
                </Flex>
                <Image src={item.image} width="100px" height={'100px'} objectFit="scale-down" />
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Orders;
