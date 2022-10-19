import { Flex, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <Flex w="100%" mt="20px" justifyContent="space-evenly">
        <Tabs index={location.pathname === "/orders" ? 1 : 0}>
          <TabList>
            <Tab
              w="600px"
              onClick={() => {
                navigate("/category");
              }}
            >
              Category
            </Tab>
            <Tab
              onClick={() => {
                navigate("/orders");
              }}
              w="600px"
            >
              Orders
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
    </div>
  );
};

export default Header;
