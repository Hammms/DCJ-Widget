# Death Care Jobs JavaScript Widget

[![Lint, Build, & Release](https://github.com/disruptmedia/dcj-widget/actions/workflows/lint-and-release.yml/badge.svg?branch=main)](https://github.com/disruptmedia/dcj-widget/actions/workflows/lint-and-release.yml)

## Usage

### JavaScript

The script below can be used to embed the widget dynamically within the specified container. The `data-container` attribute accepts a valid CSS selector string. [Learn More On MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector#parameters).

This can be placed anywhere within the page's HTML, but preferably before the end of the `</head>` tag.

```html
<!-- Death Care Jobs Widget Code -->
<script src="https://cdn.deathcarejobs.com/w/widget.js"
  data-container="div#dcj-listings"
  data-utm-source="Connecting Directors"
  data-utm-campaign="Jobs Page"
  data-count="5"
  defer
></script>
<!-- /Death Care Jobs Widget Code -->
```

### HTML

Within the document body, there should be an empty div where the `widget` can be placed. Anything within this div will be replaced. In the code snippet above we've selected an element with the ID of `dcj-listings`. Given this, the HTML body should include a div like so:

```html
<div id="dcj-listings"></div>
```

Once the script has loaded and is initialized, it will embed the estimator in the div.

### Configuration Attributes

* **`data-container`**
  * **Required:** yes
  * **Default:** `undefined`
  * **Type:** Valid CSS Selector String
* **`data-utm-source`**
  * **Required:** no
  * **Default:** `window.location.hostname`
* **`data-utm-campaign`**
  * **Required:** no
  * **Default:** `""`
* **`data-count`**
  * **Required:** no
  * **Default:** `5`
