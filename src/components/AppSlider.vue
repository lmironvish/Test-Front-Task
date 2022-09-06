<template>
  <div v-if="slideList" class="app-slider">
    <swiper
      ref="slider"
      class="app-slider__container"
      :options="sliderOptions"
      @slide-change="emitSlideChange"
      @set-translate="setSkyTranslate"
    >
      <swiper-slide
        v-for="slideListItem in slideList"
        :key="slideListItem.id"
        class="swiper-slide app-slider__slide"
      >
        <div class="app-slider__img-box">
          <img class="app-slider__img" :src="slideListItem.image" alt="slide" />
        </div>
        <img class="app-slider__bg-img" src="@/assets/images/frontClouds.png" />
        <p class="app-slider__slide-content">
          {{ slideListItem.text }}
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

  // data() {
  //   return {
  //     skyTranslate: 0,
  //   }
  // },

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

    // getSkyTranslate() {
    //   return {
    //     transform: `translate3d(${this.skyTranslate * -1}px, 0px, 0px)`,
    //   }
    // },

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

    // setSkyTranslate(evt) {
    //   this.skyTranslate = evt
    // },

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

  width: 70%;
  height: 370px;
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
  max-width: 35%;
  height: 35%;
  margin: 0 auto;
  overflow: hidden;
}

.app-slider__img {
  display: block;
  width: 100%;
  margin: 0 auto;

  line-height: 0;
}

.app-slider__bg-img {
  position: fixed;

  top: 0;

  width: 100%;
  margin: 0 auto;

  line-height: 0;

  pointer-events: none;
}

.app-slider__slide-content {
  @include container;

  position: relative;

  display: block;
  width: 100%;
  margin: 0 auto;

  font-size: 20px;
  line-height: 32px;
  text-align: center;
}
</style>
