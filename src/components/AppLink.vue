<template>
  <component
    :is="dataItem.tag"
    :to="{ name: dataItem.to }"
    :link="dataItem.link"
    :target="dataItem.target"
    class="link"
    :class="getClassIcon"
  >
    <span class="link__content">
      <slot name="default" />
    </span>
    <span class="link__icon">
      <slot name="icon" />
    </span>
  </component>
</template>

<script>
export default {
  name: "AppLink",

  props: {
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

    icon: {
      type: [String, null],
      required: false,
      default: null,
      to: null,
      target: null,
    },
  },

  computed: {
    getClassIcon() {
      return [
        {
          "link_icon-left": this.icon && this.icon === "left",
        },
        {
          "link_icon-right": this.icon && this.icon === "right",
        },
      ]
    },
  },
}
</script>

<style lang="scss">
.link {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  color: inherit;
  text-decoration: none;

  cursor: pointer;
}

.link__content {
  order: 1;

  color: inherit;
}

.link_icon-left .link__icon {
  order: -1;
  margin-right: 10px;
}

.link_icon-right .link__icon {
  order: 2;
  margin-left: 10px;
}
</style>
