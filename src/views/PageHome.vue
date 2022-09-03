<template>
  <main class="home">
    <AppSliderProgress
      class="home__slider-counter"
      :progress="activeSlide"
      :progress-slide="getProgressSlide"
    ></AppSliderProgress>
    <AppSlider
      ref="slider"
      class="home__slider"
      :slide-list="slideList"
      @slideChange="onSlideChange"
    ></AppSlider>
    <AppSliderControl
      v-if="activeSlide > 1"
      class="home__slider-control home__slider-control_left"
      @clickBtn="slide('prev')"
    ></AppSliderControl>
    <AppSliderControl
      v-if="!isSlideEnd"
      class="home__slider-control home__slider-control_right"
      @clickBtn="slide('next')"
    ></AppSliderControl>
  </main>
</template>

<script>
import AppSlider from "@/components/AppSlider"
import AppSliderControl from "@/components/AppSliderControl"
import AppSliderProgress from "@/components/AppSliderProgress"
import dataSlider from "@/helpers/dataSlider"

export default {
  name: "PageHome",

  components: {
    AppSlider,
    AppSliderControl,
    AppSliderProgress,
  },

  data() {
    return {
      activeSlide: 1,
      slideList: dataSlider,
      isSlideEnd: false,
    }
  },

  computed: {
    getProgressSlide() {
      return `${this.activeSlide}/${this.slideList.length}`
    },
  },

  methods: {
    onSlideChange(evt) {
      this.setActiveIndex(evt)
      this.toggleSlideControls(evt)
    },

    setActiveIndex(evt) {
      this.activeSlide = evt.activeIndex + 1
    },

    toggleSlideControls(evt) {
      this.isSlideEnd = evt.isEndSlide
    },

    slide(direction) {
      this.$refs.slider.slide(direction)
    },
  },
}
</script>

<style lang="scss">
.home__slider-control {
  &_left {
    transform: rotate(180deg);
  }
}
</style>
