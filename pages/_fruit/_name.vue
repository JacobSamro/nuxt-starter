<template>
  <div>
    <h2>{{ fruit }}</h2>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return {
      fruit: context.params.fruit,
      name: context.params.name,
    };
  },
};
</script>
