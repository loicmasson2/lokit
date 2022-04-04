/** @jsxImportSource theme-ui */
import React from "react";
// We want to always get from source
import Background from "../lib/Background";

export default { title: "Background" };

export const BackgroundExample = () => (
  <>
    <Background id={"1"} variant={"primary"}/>
    <Background id={"2"} variant={"secondary"} />
  </>
);
