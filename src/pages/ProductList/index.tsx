import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
import { Product } from "../../store/types";
import MapModal from "./components/MapModal";
import { ProductDataTypes } from "./types";

const ProductList = () => {
  const { categoryName } = useParams();
  const [productData, setProductData] = useState<ProductDataTypes[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const result = data.filter((item) => {
      return item.category === categoryName;
    });

    setProductData(result);
  }, [categoryName]);

  return (
    <div>
      <SimpleGrid mt="40px" columns={4} spacing={10} mx="1rem">
        {productData.map((item) => {
          return (
            <Box
              w="100%"
              key={item.id}
              border="1px solid #eee"
              borderRadius="10px"
              padding="1rem"
              _hover={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
            >
              <Image
                src={item.image}
                objectFit="scale-down"
                w="100%"
                height="200px"
              />
              <Flex
                mt="20px"
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <Text fontSize="xs">{item.title}</Text>
                <Text fontWeight="bold" fontSize="sm">
                  $ {item.price}
                </Text>
                <Button
                  onClick={() => {
                    onOpen();
                    setSelectedProduct({
                      title: item.title,
                      image: item.image,
                      price: item.price,
                    });
                  }}
                >
                  Buy
                </Button>
              </Flex>
            </Box>
          );
        })}
      </SimpleGrid>
      <MapModal
        isOpen={isOpen}
        onClose={onClose}
        setSelectedProduct={setSelectedProduct}
        selectedProduct={selectedProduct}
      />
    </div>
  );
};

export default ProductList;
