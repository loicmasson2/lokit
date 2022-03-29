/** @jsxImportSource theme-ui */
import React from "react";
// We want to always get from source
import LOH from "../lib/LOH";
import LOT from "../lib/LOT";

export default { title: "Typography" };

export const Typeface = () => (
  <>
    <LOH as="h1">HELLO STYLED</LOH>
    <LOH as="h2">HELLO STYLED</LOH>
    <LOH as="h3">HELLO STYLED</LOH>
    <LOT>Hello Text</LOT>
  </>
);
