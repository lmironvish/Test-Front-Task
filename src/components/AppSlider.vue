<template>
  <div v-if="slideList" class="app-slider">
    <swiper
      ref="slider"
      class="app-slider__container"
      :options="sliderOptions"
      @slide-change="emitSlideChange"
    >
      <swiper-slide
        v-for="slide in slideList"
        :key="slide.id"
        class="swiper-slide app-slider__slide"
      >
        <img class="app-slider__img" :src="slide.image" alt="slide" />
        <p class="app-slider__slide-content">
          {{ slide.text }}
        </p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper"

export default {
  name: "AppSlider",

  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    slideList: {
      type: Array,
      required: true,
    },
  },

  computed: {
    sliderOptions() {
      return {
        touchReleaseOnEdges: true,
        observer: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        spaceBetween: 14,
        slidesPerView: 1,
        loop: true,
        loopAdditionalSlides: 10,
        slideToClickedSlide: true,
        centeredSlides: true,
        slideActiveClass: "app-slider__slide_active",
        wrapperClass: "app-slider__wrapper",
      }
    },

    slider() {
      return this.$refs.slider
    },
  },

  methods: {
    emitSlideChange() {
      const activeIndex = this.slider.swiperInstance.realIndex
      this.$emit("slideChange", { activeIndex })
    },

    slideChange(direction) {
      // if (direction === "next") {
      //   this.$refs.slider.$swiper.slideNext()
      // } else {
      //   this.$refs.slider.$swiper.slidePrev()
      // }
      console.log("slideChange", direction)
    },
  },
}
</script>

<style lang="scss">
.app-slider {
  align-content: center;
  width: 100%;
  height: 500px;
  overflow: hidden;

  &__wrapper {
    display: flex;
  }

  &__slide {
    flex-shrink: 0;
  }
}
</style>