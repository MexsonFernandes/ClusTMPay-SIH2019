# Changelog

All notable, unreleased changes to this project will be documented in this file. For the released changes, please visit the [Releases](https://github.com/mirumee/saleor-storefront/releases) page.

## [Unreleased]

- Add stock quantity check without checkout in cart page - #254 by @piotrgrundas
- Add ability to chose payment method, add dummy payment method, improve error handling on checkout shipping address update - #255 by @piotrgrundas
- Add order details page - #262 by @piotrgrundas

## 0.4.0

- Handle quantity API errors in cart - #199 by @piotrgrundas
- Fix sticky footer, adjust cart overlay to the mockups, fix error if no shipping method found - #205 by @piotrgrundas
- Disable ability to continue to the billing step without shipement chosen - #211 by @piotrgrundas
- Set max width of images in product description as 100% - #220 by @jxltom
- Move checkout to a separate module, create checkout after user provides a valid email - #223 by @piotrgrundas
- Update checkout review page styles - #239 by @piotrgrundas
- Add syncing checkout after user logs in - #243 by @piotrgrundas
- Create checkout for logged in users without checkout upon adding to cart - #250 by @piotrgrundas

## 0.3.0

- Hide filters and sorting when there are no search results; add trending products to empty search and categories pages - #165 by @piotrgrundas
- Add fetching menus from API - #170 by @piotrgrundas
- Add "Add to cart" indicator - #173 by @piotrgrundas
- Fix product page tablet view - #181 by @piotrgrundas
- Add collection view, fix cursor pagination for categories, update storefront to use new thumbnail structure - #178 by @piotrgrundas
- Minor UX improvements - #182 by @piotrgrundas
- Fix product titles breaking the homepage carousel - #184 by @piotrgrundas
- Fix resolving URLs that include numbers - #185 by @piotrgrundas
- Add OpenGraph and Meta tags - #191 by @piotrgrundas
- Add `tslint` check on CI; add the ability to change cart quantity - #194 by @piotrgrundas
- Update placeholder for missing image - #198 by @piotrgrundas
