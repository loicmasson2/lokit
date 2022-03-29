import React from "react";
import { Text } from "theme-ui";

type Props = {
  children: React.ReactNode;
};

const LOT = ({ children }: Props) => (
  <Text
    sx={{
      fontFamily: "body",
    }}
  >
    {children}
  </Text>
);

export default LOT;
