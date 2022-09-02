<template>
  <div id="app">
    <TheHeader />
    <TheTitle />
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"
import TheTitle from "./components/TheTitle.vue"
export default {
  name: "App",

  components: {
    TheHeader,
    TheTitle,
  },
}
</script>

<style lang="scss"></style>
