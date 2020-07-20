<template>
  <div id="app">
    <Header />
    <RouterView />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import Header from "./packs/components/Header.vue";

export default {
  data: function() {
    return {
      message: "Hello Vue!",
    };
  },
  components: {
    Header,
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
