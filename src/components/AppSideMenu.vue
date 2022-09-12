<template>
  <span class="menu">
    <AppSideMenuItem
      v-for="item in dataItem"
      :key="item.content"
      :data-item="item"
      class="menu__item"
    />
  </span>
</template>

<script>
import AppSideMenuItem from "@/components/AppSideMenuItem"

export default {
  name: "AppNavList",

  components: {
    AppSideMenuItem,
  },

  props: {
    dataItem: {
      type: Array,
      required: false,
      default: () => [
        {
          content: "Подсказки",
          id: "1",
        },
      ],
    },
  },
}
</script>

<style lang="scss">
// .nav-list {
//   display: block;
//   padding: 0;

//   text-align: center;

//   list-style: none;

//   @media (min-width: $min-width-tablet) {
//     display: flex;
//     flex-wrap: wrap;
//   }
// }
</style>
