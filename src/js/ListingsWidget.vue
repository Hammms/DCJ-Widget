<template>
  <div id="dcj-widget-main">
    <div id="dcj-widget-container">
      <listings-header :title="title" :utm="utm" />
      <div v-if="error && !loading" class="dcj-widget-error-message">
        <h5 class="text">
          Sorry, we encountered an error. Please try refreshing or try again
          later.
        </h5>
      </div>
      <loading-indicator v-if="loading" />
      <listings-container v-else :listings="listings" :utm="utm" />
    </div>
  </div>
</template>

<script>
// const ListingsHeader = () => import("Components/ListingsHeader.vue");
// const ListingsContainer = () => import("Components/ListingsContainer.vue");
// const LoadingIndicator = () => import("Components/LoadingIndicator.vue");
import ListingsHeader from "Components/ListingsHeader.vue";
import ListingsContainer from "Components/ListingsContainer.vue";
import LoadingIndicator from "Components/LoadingIndicator.vue";

export default {
  components: {
    ListingsHeader,
    ListingsContainer,
    LoadingIndicator,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "Death Care Jobs",
    },

    count: {
      type: String,
      required: false,
      default: "5",
    },

    utmSource: {
      type: String,
      required: true,
      default: "",
    },

    utmCampaign: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      response: [],
      loading: true,
      error: false,
    };
  },

  computed: {
    listings: function () {
      let listings = [];

      for (let i = 0; i < this.response.length; i++) {
        const listing = this.response[i];
        const meta = listing.meta;

        listings.push({
          id: listing.id,
          link: listing.link + `${this.utm}`,
          title: listing.title.rendered,
          location: meta["_job_location"],
          company: meta["_company_name"],
          featured: meta["_featured"],
        });
      }

      // https://reactgo.com/sort-arrayofobjects/
      // a - b: ascending
      // b - a: decending
      return listings.sort((a, b) => b.featured - a.featured);
    },
    utm: function () {
      let params = {};

      params.utm_source = this.utmSource;
      params.utm_medium = "widget";

      if (this.utmCampaign !== "") {
        params.utm_campaign = this.utmCampaign;
      }

      return (
        "?" +
        Object.keys(params)
          .map(function (k) {
            return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
          })
          .join("&")
      );
    },
  },

  created: async function () {
    await fetch(
      `${this.$baseUrl}/job_listing?per_page=${this.count}&_fields=id,date,title,link,meta`
    )
      .then((response) => response.json())
      .then((listings) => {
        this.response = listings;
        this.loading = false;
      })
      .catch((error) => {
        this.error = true;
        this.loading = false;
        console.group("[DCJ Widget] ERROR: ");
        console.error(`Error: ${error.message}`);
        console.groupEnd();
      });
  },
};
</script>

<style>
div#dcj-widget-main div#dcj-widget-container {
  background: #fff !important;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.25rem;
}
div#dcj-widget-main div#dcj-widget-container a.text p.text span.text h5.text {
  font-family: Arial, Helvetica, sans-serif !important;
}
div#dcj-widget-main h5 {
  font-family: Arial, Helvetica, sans-serif !important;
  background-color: #fff !important;
}

.dcj-widget-error-message {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
</style>
