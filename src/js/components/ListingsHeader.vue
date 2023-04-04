<template>
  <div id="dcj-widget-header">
    <img
      src="https://cdn.deathcarejobs.com/assets/logo.png"
      alt="Deathcare jobs"
      id="dcj-widget-logo"
    />
    <a
      :href="`https://deathcarejobs.com/post-a-job/${utm ? utm : ''}`"
      id="dcj-widget-post-job"
      style="font-weight: 800"
      >Post a Job</a
    >
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: false,
      default: "Death Care Jobs",
    },
    utm: {
      type: String,
    },
  },
};
</script>

<style scoped>
div#dcj-widget-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  color: #9fe900;
  background-color: #222b38;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  font-family: Arial, Helvetica, sans-serif !important;
}
a#dcj-widget-post-job {
  margin: 10px 0px;
  padding: 0.5rem;
  border-radius: 5px;
  border: solid #9fe900 1px;
  text-decoration: none;
  color: #9fe900;
  font-family: inherit;
}

a#dcj-widget-post-job:hover {
  color: #222b38;
  background-color: #9fe900;
}

img#dcj-widget-logo {
  margin: 10px 0px;
  max-height: 1.5rem;
  background-color: #222b38;
}
</style>
