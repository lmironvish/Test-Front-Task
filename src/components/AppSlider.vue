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
        <div class="app-slider__img-box">
          <img class="app-slider__img" :src="slide.image" alt="slide" />
        </div>
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
      const isEndSlide = this.slider.swiperInstance.isEnd

      this.$emit("slideChange", { activeIndex, isEndSlide })
    },

    slide(direction) {
      switch (direction) {
        case "next":
          this.$refs.slider.$swiper.slideNext()
          break
        case "prev":
          this.$refs.slider.$swiper.slidePrev()
          break
        default:
          return
      }
    },
  },
}
</script>

<style lang="scss">
.app-slider {
  @include container;

  width: 900px;
  margin: 0 auto;
  overflow: hidden;

  &__wrapper {
    display: flex;
    margin-top: 50px;
  }

  &__slide {
    flex-shrink: 0;
  }
}

.app-slider__img-box {
  width: 100%;
  max-width: 303px;
  height: 214px;
  margin: 0 auto;
  overflow: hidden;
}

.app-slider__img {
  display: block;
  width: 100%;
  margin: 0 auto;

  line-height: 0;
}

.app-slider__slide-content {
  @include container;

  display: block;
  width: 100%;
  margin: 0 auto;

  font-size: 20px;
  line-height: 32px;
  text-align: center;
}
</style>
