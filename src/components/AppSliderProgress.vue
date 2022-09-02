<template>
  <div class="app-slider-progress">
    <span>{{ progressSlide }}</span>
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
