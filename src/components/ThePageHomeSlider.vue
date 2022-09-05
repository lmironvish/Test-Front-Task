<template>
  <div class="page-home-slider">
    <AppSliderProgress
      class="page-home-slider__slider-progress"
      :progress="activeSlide"
      :progress-slide="getProgressSlide"
    ></AppSliderProgress>
    <AppSlider
      ref="slider"
      class="page-home-slider__slider"
      :slide-list="slideList"
      @slideChange="onSlideChange"
    ></AppSlider>
    <AppSliderControl
      v-if="activeSlide > 1"
      class="page-home-slider__slider-control page-home-slider__slider-control_left"
      @clickBtn="slide('prev')"
    ></AppSliderControl>
    <AppSliderControl
      v-if="!isSlideEnd"
      class="page-home-slider__slider-control page-home-slider__slider-control_right"
      @clickBtn="slide('next')"
    ></AppSliderControl>
  </div>
</template>

<script>
import AppSlider from "@/components/AppSlider"
import AppSliderControl from "@/components/AppSliderControl"
import AppSliderProgress from "@/components/AppSliderProgress"
import dataSlider from "@/helpers/dataSlider"

export default {
  name: "ThePageHomeSlider",

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
.page-home-slider {
  position: relative;
}

.page-home-slider__slider-progress {
  position: absolute;
  top: 0;
  left: 50%;

  transform: translate(0, -50%);
}

.page-home-slider__slider-control {
  position: absolute;
  top: 30%;

  transform: translate(-50%, 0%);

  &_left {
    left: 150px;

    transform: rotate(180deg);
  }

  &_right {
    right: 150px;
  }
}
</style>
