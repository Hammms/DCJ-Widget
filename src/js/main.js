import Vue from "vue";
import ListingsWidget from "@/ListingsWidget.vue";

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === "development";

Vue.prototype.$baseUrl = "https://deathcarejobs.com/wp-json/wp/v2";

const currentScript =
  document.currentScript ||
  document.querySelector(
    'script[src^="https://cdn.deathcarejobs.com/w/widget.js"]'
  );

let config = {
  count: currentScript.dataset.count || "5",
  container: currentScript.dataset.container,
  utmSource: currentScript.dataset.utmSource || window.location.hostname,
  utmCampaign: currentScript.dataset.utmCampaign || ""
};

let container = document.querySelector(config.container);

if (!container || typeof container !== "object") {
  console.error(
    `[ DCJ Widget ] ERROR: ${config.container} does not exist on the DOM`
  );
} else {
  let widget = document.createElement("div");
  widget.id = "dcj-widget-wrapper";
  container.appendChild(widget);

  new Vue({
    el: `${config.container} #dcj-widget-wrapper`,
    render: el =>
      el(ListingsWidget, {
        props: {
          count: config.count,
          utmSource: config.utmSource,
          utmCampaign: config.utmCampaign
        }
      })
  });
}
