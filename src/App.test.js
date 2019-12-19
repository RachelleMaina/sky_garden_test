import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Banner from "./Components/Banner";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import Support from "./Components/Support";
import HomeView from "./Containers/HomeView";
import { offerBenefit, formatPrice } from "./utils";
import Home from "./Components/Home";

configure({ adapter: new Adapter() });
let component;

describe("Components", () => {
  it("renders Home component correctly", () => {
    component = mount(<Home />);
    expect(component.length).toBe(1);
  });
  it("renders Banner component correctly", () => {
    component = mount(<Banner />);
    expect(component.length).toBe(1);
  });

  it("renders Products component correctly", () => {
    component = mount(<Products />);
    expect(component.length).toBe(1);
  });

  it("renders Support component correctly", () => {
    component = mount(<Support />);
    expect(component.length).toBe(1);
  });

  it("renders Footer component correctly", () => {
    component = mount(<Footer />);
    expect(component.length).toBe(1);
  });
});

describe("Containers", () => {
  it("renders HomeView container correctly", () => {
    component = mount(<HomeView />);
    expect(component.length).toBe(1);
  });
  it("call class methods", () => {
    component = mount(<HomeView />);
    const spy = jest.spyOn(component.instance(), "getData");
    component.instance().getData();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveReturned();
  });
});

describe("utils", () => {
  it("calculates offer benefit", () => {
    let offer = offerBenefit(3000, 15);
    expect(offer).toBe(2550);
  });
  it("formats price", () => {
    let offer = formatPrice(3000);
    expect(offer).toBe("3,000");
  });
});
