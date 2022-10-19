import { Box, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CardProps } from "./types";

const Card = ({ category, image }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <Box
        border="1px solid #eee"
        borderRadius="10px"
        height="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          navigate(`/productList/${category}`);
        }}
      >
        <Image
          cursor="pointer"
          src={image}
          w="100%"
          height="50%"
          objectFit="scale-down"
        />
        <Box w="100%" p="0.5rem">
          <Text cursor="pointer" fontWeight="bold" fontSize="xl">
            {category}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default Card;
