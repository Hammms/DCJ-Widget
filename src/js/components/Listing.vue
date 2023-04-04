<template>
  <a
    :href="details.link"
    target="_blank"
    rel="nofollow"
    :class="{
      'dcj-widget-listing dcj-widget-featured': details.featured,
      'dcj-widget-listing': !details.featured,
    }"
  >
    <h2 class="dcj-widget-title" v-html="details.title"></h2>
    <div class="dcj-widget-location">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="dcj-widget-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
            clip-rule="evenodd"
          />
        </svg>
        <span v-html="details.company" class="text"></span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="dcj-widget-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          />
        </svg>
        <span
          v-if="details.location"
          v-html="details.location"
          class="text"
        ></span>
        <span v-else class="text">Anywhere</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "Listing",
  props: {
    details: {
      type: Object,
      required: true,
    },
  },
  computed: {
    location: function () {
      return ` ${this.details.location}`;
    },

    company: function () {
      return `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
        </svg> ${this.details.company}`;
    },
  },
};
</script>

<style scoped>
div#dcj-widget-main a.dcj-widget-listing {
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
  padding: 1.25rem;
  border-radius: 5px;
  font-family: Arial, Helvetica, sans-serif !important;
}

div#dcj-widget-main a.dcj-widget-listing:hover {
  text-decoration: none;
  background-color: rgba(243, 244, 246, 1); /* tw: gray-100 */
}

div#dcj-widget-main a.dcj-widget-featured {
  background-color: rgba(253, 230, 138, 1) !important; /* tw: yellow-200 */
}

div#dcj-widget-main a.dcj-widget-featured:hover {
  background-color: rgba(254, 243, 199, 1) !important; /* tw: yellow-100 */
}

div#dcj-widget-main a.dcj-widget-featured:first-child {
  margin-top: 0;
}

div#dcj-widget-main a.dcj-widget-listing:last-child {
  margin-bottom: 0;
}

div#dcj-widget-main .dcj-widget-location {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: rgba(55, 65, 81, 1); /* tw:gray-700 */
  font-size: 14px;
  background-color: inherit !important;
}

div#dcj-widget-main .dcj-widget-location > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0.5rem;
  background-color: inherit !important;
  font-family: Arial, Helvetica, sans-serif !important;
}

div#dcj-widget-main .dcj-widget-location > div > span,
svg.dcj-widget-icon {
  background-color: inherit !important;
  font-family: inherit !important;
}

div#dcj-widget-main svg.dcj-widget-icon {
  display: block;
  height: 1rem;
  width: 1rem;
  margin-right: 5px;
  color: #a4a6a8; /* tw: gray-500 */
}

.dcj-widget-title {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0;
  color: #333;
  background-color: inherit !important;
  font-family: inherit !important;
}
</style>
