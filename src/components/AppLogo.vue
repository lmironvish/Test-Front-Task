<template>
  <div class="logo">
    <component
      :is="dataItem.tag"
      :to="{ name: dataItem.to }"
      :link="dataItem.link"
      class="logo__link"
    >
      <div class="logo__icon">
        <slot name="default">
          <IconLogo />
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
      }),
    },
  },
}
</script>
