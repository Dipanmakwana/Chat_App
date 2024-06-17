import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius={"lg"}
      m={1}
      mb={2}
      fontSize={12}
      cursor={"pointer"}
      background={"#b81cb8"}
      color={"white"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      onClick={handleFunction}
    >
      {user.name}
      
      <CloseIcon h={"10px"} ml={3} onClick={handleFunction} />
    </Box>
  );
};

export default UserBadgeItem;
