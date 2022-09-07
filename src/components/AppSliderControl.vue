<template>
  <button class="slider-control" @click="emitClickBtn">
    <div class="slider-control__icon">
      <slot name="default">
        <IconArrow class="slider-control__icon" />
      </slot>
    </div>
  </button>
</template>

<script>
import IconArrow from "./icons/IconArrow"

export default {
  name: "AppSliderControl",

  components: {
    IconArrow,
  },

  methods: {
    emitClickBtn() {
      this.$emit("clickBtn")
    },
  },
}
</script>

<style lang="scss">
.slider-control {
  display: block;
  margin: 0;
  padding: 0;

  background: none;
  background-color: transparent;
  border: none;
}
</style>
