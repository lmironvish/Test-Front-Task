<template>
  <div class="menu">
    <AppSideMenuItem v-for="item in dataItems" :key="item">
      <template #default v-if="item.activeItem === true"
        >0{{ item.id }}
      </template>
      <template #content v-if="item.activeItem === true">{{
        item.content
      }}</template>
    </AppSideMenuItem>
  </div>
</template>

<script>
import AppSideMenuItem from "@/components/AppSideMenuItem"

export default {
  name: "AppSideMenu",

  components: {
    AppSideMenuItem,
  },

  data() {
    return {
      dataItems: [
        {
          id: 1,
          content: "Подсказки",
          activeItem: false,
        },
        {
          id: 2,
          content: "Подсказки",
          activeItem: false,
        },
        {
          id: 3,
          content: "Подсказки",
          activeItem: true,
        },
        {
          id: 4,
          content: "Подсказки",
          activeItem: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.menu {
  position: absolute;
  bottom: 55%;
  left: 4%;
  z-index: 10;

  @media (min-width: 1050px) {
    bottom: 57%;
    left: 3%;
  }
}
</style>
