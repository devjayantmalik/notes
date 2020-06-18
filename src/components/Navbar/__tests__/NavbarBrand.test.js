import React from "react";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";

import NavbarBrand from "../NavbarBrand";
import Navbar from "..";
import { render } from "@testing-library/react";

it("Should point to / url by default.", () => {
  const element = renderer.create(
    <BrowserRouter>
      <NavbarBrand title="Dashboard" />
    </BrowserRouter>
  );

  const tree = element.toJSON();
  expect(tree.children[0].props.href).toBe("/");
});

it("Should display Home as default title", () => {
  const root = renderer.create(
    <BrowserRouter>
      <NavbarBrand />
    </BrowserRouter>
  ).root;

  // span children are ['Hello'] so, we used children[0]
  expect(root.findByType("span").children[0]).toBe("Home");
});

it("Should should point to destinationUrl when destinationUrl is provided.", () => {
  const element = renderer
    .create(
      <BrowserRouter>
        <NavbarBrand destinationUrl="/info" />
      </BrowserRouter>
    )
    .toJSON();

  expect(element.children[0].props.href).toBe("/info");
});

it("Should display an image when imageLocation is provided", () => {
  const logoUrl = "https://images.com/demo.png";

  const element = renderer.create(
    <BrowserRouter>
      <NavbarBrand logoUrl={logoUrl} />
    </BrowserRouter>
  ).root;

  expect(element.findByType("img").props.src).toBe(logoUrl);
});
