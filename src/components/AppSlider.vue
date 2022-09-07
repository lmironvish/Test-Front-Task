<template>
  <div v-if="slideList" class="slider">
    <swiper
      ref="slider"
      class="slider__container"
      :options="sliderOptions"
      @slide-change="emitSlideChange"
      @set-translate="test"
    >
      <swiper-slide
        v-for="(slideListItem, index) in slideList"
        :key="slideListItem.id"
        class="swiper-slide slider__slide"
      >
        <div class="slider__img-box">
          <img class="slider__img" :src="slideListItem.image" alt="slide" />
        </div>
        <img
          v-if="index === 0"
          class="slider__img-sky"
          :src="require('@/assets/images/frontClouds.png')"
          alt="slide"
          :style="[{ transform: `translate3d(${translate * -1}px, 0px, 0px)` }]"
        />
        <p class="slider__slide-content">
          {{ slideListItem.text }}
        </p>
      </swiper-slide>
    </swiper>
    <img
      class="slider__img-sky-bottom"
      :src="require('@/assets/images/frontClouds.png')"
      alt="slide"
    />
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

  data() {
    return {
      translate: 0,
    }
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
        draggable: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        slideActiveClass: "slider__slide_active",
        wrapperClass: "slider__wrapper",
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

    test(evt) {
      this.translate = evt
      console.log(evt)
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
.slider {
  position: relative;
  z-index: 1;

  align-content: center;
  width: 100%;

  &__wrapper {
    display: flex;
  }

  &__slide {
    flex-shrink: 0;
  }

  &__container {
    position: relative;

    overflow: hidden;
  }

  &__img-box {
    position: relative;
    z-index: 1;

    width: 100%;
    max-width: 303px;
    height: 214px;
    margin: 0 auto;

    pointer-events: none;
  }

  &__img {
    display: block;
    width: 100%;
    margin: 0 auto;

    line-height: 0;
  }

  &__slide-content {
    position: relative;
    z-index: 3;

    display: block;
    width: 100%;
    margin: 0 auto;

    font-size: 20px;
    line-height: 32px;
    text-align: center;

    pointer-events: none;
  }

  &__img-sky {
    position: absolute;
    top: -58px;
    left: -260px;
    z-index: 2;

    width: 1440px;
    height: auto;

    transition: all 0.3s;

    pointer-events: none;
  }

  &__img-sky-bottom {
    position: absolute;
    top: -58px;
    left: -260px;
    z-index: -1;

    width: 1440px;
    height: auto;

    transition: all 0.3s;

    pointer-events: none;
  }
}
</style>
