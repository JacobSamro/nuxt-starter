<template>
  <div>
    <iframe
      width="560"
      height="315"
      :src="videoLink"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <nuxt-link to="/contact">Contact Me</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: "super",
  asyncData() {
    console.log("server")
    // TODO: Server
    return {
      videoLink: "https://www.youtube.com/embed/uSGYg4qbgqM",
    };
  },
  mounted() {
    console.log("mounted")
  },
};
</script>

<style>
</style>
