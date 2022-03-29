import React from "react";

type Props = {
  children: React.ReactNode;
};

const Text = ({ children }: Props) => (
  <h1
    sx={{
      fontFamily: "heading",
    }}
  >
    {children}
  </h1>
);
export { Text };
