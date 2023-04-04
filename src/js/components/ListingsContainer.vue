<template>
  <section id="dcj-widget-list">
    <Listing v-for="listing in listings" :key="listing.id" :details="listing" />
    <a
      :href="`https://deathcarejobs.com/${utm ? utm : ''}`"
      id="dcj-widget-more-listings"
      class="text"
      target="_blank"
      >Show me more!</a
    >
  </section>
</template>
<script>
// const Listing = () => import("Components/Listing.vue");
import Listing from "Components/Listing.vue";

export default {
  components: { Listing },
  props: {
    listings: {
      type: Array,
    },
    utm: {
      type: String,
    },
  },
};
</script>

<style scoped>
div#dcj-widget-main section#dcj-widget-list {
  background-color: #fff !important;
  padding: 0.75rem;
  border-radius: 5px;
}

section#dcj-widget-list a#dcj-widget-more-listings {
  border-radius: 5px;
  padding: 1.5rem 0rem;
  display: flex;
  justify-content: center;
  text-decoration: none;
  font-size: 1.15rem !important;
  color: #222b38 !important;
  background-color: #fff !important;
  margin: 0 !important;
  font-weight: 800 !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

section#dcj-widget-list a#dcj-widget-more-listings:hover {
  color: #9fe900 !important;
  background-color: #222b38 !important;
}
</style>
