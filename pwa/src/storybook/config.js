import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import StylesDecorator from "./StylesDecorator";

setOptions({
  name: "ClusTMPay",
  url: "https://github.com/MexsonFernandes/ClusTMPay-SIH2019",
  goFullScreen: false,
  sidebarAnimations: true
});

addDecorator(StylesDecorator);

function loadStories() {
  require("./stories/components.js");
  require("./stories/base.js");
}

configure(loadStories, module);
