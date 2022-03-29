import React from "react";
import { Heading } from "theme-ui";

type Props = {
  children: React.ReactNode;
};

const LOH = ({ children, ...props }: Props) => (
  <Heading
    sx={{
      fontFamily: "Cabin",
    }}
    {...props}
  >
    {children}
  </Heading>
);

export default LOH;
