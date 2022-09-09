<template>
  <div class="menu">
    <component
      v-for="item in items"
      :key="item.id"
      :is="dataItem.tag"
      :to="dataItem.to"
      :link="dataItem.link"
      :target="dataItem.target"
      class="menu-item"
    >
      <span class="menu-item__content"><slot name="content" /></span>
    </component>
  </div>
</template>

<script>
export default {
  name: "AppSideMenuItem",

  dataItem: {
    type: Object,
    required: false,
    default: () => ({
      tag: "a",
      to: null,
      link: "#",
      target: null,
    }),
  },
}
</script>

<style lang="scss">
.menu {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  order: 1;
  margin-right: 10px;

  color: inherit;

  text-decoration: none;

  cursor: pointer;
}
</style>
