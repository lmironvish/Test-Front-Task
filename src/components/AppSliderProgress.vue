<template>
  <div class="slider-progress">
    <span class="slider-progress__content">{{ progressSlide }}</span>
  </div>
</template>

<script>
export default {
  name: "AppSliderProgress",

  props: {
    progressSlide: {
      type: String,
      required: true,
      // default: "0/0",
    },
  },
}
</script>

<style lang="scss">
.slider-progress {
  position: relative;

  width: 56px;
  height: 56px;

  border-radius: 50%;
  box-shadow: 0 5px 25px 0 rgb(0 0 0 / 20%);
}

.slider-progress__content {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}
</style>
