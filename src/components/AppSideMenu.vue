<template>
  <div class="menu">
    <AppSideMenuItem class="menu__item"><IconMenuItem /></AppSideMenuItem>
  </div>
</template>

<script>
import AppSideMenuItem from "@/components/AppMenuItem"
import IconMenuItem from "@/components/icons/IconMenuItem"

export default {
  name: "AppSideMenuItem",

  components: {
    AppMenuItem,
    IconMenuItem,
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
