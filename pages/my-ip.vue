<template>
  <h2>You IP is {{ ip }}</h2>
</template>

<script>
export default {
  async asyncData(context) {
    console.log(context.userAgent)

    const res = await context.$axios.get("https://api.ipify.org/?format=json");

    return {
      ip: res.data.ip,
    };

  },
  // mounted() {
  //   this.$axios.get("https://api.ipify.org/?format=json").then((res) => {
  //     console.log(res.data);
  //     this.ip = res.data.ip
  //   });
  // },
  // data() {
  //   return {
  //     ip: "127.0.0.1",
  //   };
  // },
};
</script>
