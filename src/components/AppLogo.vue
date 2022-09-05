<template>
  <div class="logo">
    <component
      :is="dataItem.tag"
      :to="{ name: dataItem.to }"
      :link="dataItem.link"
      :target="dataItem.target"
      class="logo__link"
    >
      <div class="logo__icon-box">
        <slot name="default">
          <IconLogo class="logo__icon" />
        </slot>
      </div>
    </component>
  </div>
</template>

<script>
import IconLogo from "./icons/IconLogo"

export default {
  name: "AppLogo",

  components: {
    IconLogo,
  },

  props: {
    dataItem: {
      type: Object,
      required: false,
      default: () => ({
        tag: "RouterLink",
        to: "PageHome",
        link: null,
        target: null,
      }),
    },
  },
}
</script>

<style lang="scss">
.logo__link {
  display: block;

  color: inherit;
  text-decoration: none;
}

.logo__icon-box {
  color: inherit;
}
</style>
