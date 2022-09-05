<template>
  <div id="app" class="app">
    <TheHeader class="app__header" />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
export default {
  name: "App",

  components: {
    TheHeader,
  },
}
</script>

<style lang="scss">
.app {
  position: fixed;

  width: 100%;
  height: 100%;

  background: url("@/assets/images/banner.png");
  background-size: 100% 100%;
}
</style>
