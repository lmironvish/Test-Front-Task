<template>
  <div class="slider-control">
    <slot name="default"><IconArrow /></slot>
  </div>
</template>

<script>
import IconArrow from "./icons/IconArrow"

export default {
  name: "SliderControl",

  components: {
    IconArrow,
  },
}
</script>
