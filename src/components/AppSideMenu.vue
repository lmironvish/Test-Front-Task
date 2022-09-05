<template>
  <div class="menu">
    <AppMenuItem class="menu__item" />
  </div>
</template>

<script>
import AppMenuItem from "@/components/AppMenuItem"

export default {
  name: "AppSideMenu",

  components: {
    AppMenuItem,
  },
}
</script>

<style lang="scss">
.menu__item {
  display: block;
  margin: 0;
  padding: 0;

  background: none;
  border: none;
}
</style>
