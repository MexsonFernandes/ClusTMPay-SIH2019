import { GatewaysEnum } from "../../types/globalTypes";

import { generatePageUrl } from "./utils";

export const BASE_URL = "/";
export const PRODUCTS_PER_PAGE = 8;
export const SUPPORT_EMAIL = "support@example.com";
export const PROVIDERS = {
  BRAINTREE: GatewaysEnum.BRAINTREE,
  DUMMY: GatewaysEnum.DUMMY
};
export const STATIC_PAGES = [
  {
    label: "About",
    url: generatePageUrl("about")
  }
];
export const SOCIAL_MEDIA = [
  {
    ariaLabel: "facebook",
    href: "",
    path: require("../images/facebook-icon.svg")
  },
  {
    ariaLabel: "instagram",
    href: "",
    path: require("../images/instagram-icon.svg")
  },
  {
    ariaLabel: "twitter",
    href: "",
    path: require("../images/twitter-icon.svg")
  },
  {
    ariaLabel: "youtube",
    href: "",
    path: require("../images/youtube-icon.svg")
  }
];
export const META_DEFAULTS = {
  custom: [],
  description: "PWA Storefront for ClusTMPay",

  image: `${window.location.origin}${require("../images/logo.svg")}`,
  title: "ClusTMPay",
  type: "website",
  url: window.location.origin
};
