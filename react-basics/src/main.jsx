import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

const reactElement = React.createElement(
  "a",
  {
    href: "https://google.com",
    target: "_blank",
  },
  "Visit google"
);

createRoot(document.getElementById("root")).render(reactElement);
