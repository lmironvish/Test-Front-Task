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
  display: flex;
  flex-direction: column;
  align-content: center;
  min-width: 900px;
  max-width: 1440px;
  height: 100vh;
  min-height: 500px;
  max-height: 700px;

  background-image: url("~assets/images/banner.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
</style>
