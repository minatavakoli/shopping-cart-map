import { SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { data } from "../../data";
import Card from "./components/Card";

const Category = () => {
  const [categoryNames, setCategoryNames] = useState<string[]>([]);

  useEffect(() => {
    const names = data.map((item) => {
      return item.category;
    });

    const uniqNames = [...new Set(names)];
    setCategoryNames(uniqNames);
  }, [data]);

  return (
    <SimpleGrid mt="40px" columns={2} spacing={10} width="1200px" mx="auto">
      {categoryNames.map((item) => {
        const image = data.find((product) => product.category === item)?.image;

        return <Card key={item} category={item} image={image} />;
      })}
    </SimpleGrid>
  );
};

export default Category;
