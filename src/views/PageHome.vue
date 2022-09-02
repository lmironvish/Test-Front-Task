<template>
  <main class="main">
    <AppSliderProgress
      class="main__slider-counter"
      :progress="activeSlide"
      :progressSlide="getProgressSlide"
    ></AppSliderProgress>
    <AppSlider
      class="main__slider"
      @slideChange="setActiveIndex"
      :slideList="slideList"
    ></AppSlider>
    <AppArrow class="main__slider-arrow"></AppArrow>
  </main>
</template>

<script>
import AppSlider from "@/components/AppSlider"
import AppArrow from "@/components/AppArrow"
import AppSliderProgress from "@/components/AppSliderProgress"

export default {
  name: "PageHome",

  components: {
    AppSlider,
    AppArrow,
    AppSliderProgress,
  },

  data() {
    return {
      activeSlide: 1,
      slideList: [
        {
          id: 1,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
        {
          id: 2,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
        {
          id: 3,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
        {
          id: 4,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
        {
          id: 5,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
        {
          id: 6,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
        {
          id: 7,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
        {
          id: 8,
          image: require(`@/assets/images/racer.png`),
          text: `Для примера мы показали вам его лицо.  В первой серии он прячется в подвале за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — ему не терпится отдать вам промокод.`,
        },
      ],
    }
  },

  computed: {
    getProgressSlide() {
      return `${this.activeSlide}/${this.slideList.length}`
    },
  },

  methods: {
    setActiveIndex(evt) {
      this.activeSlide = evt.activeIndex + 1
    },
  },
}
</script>

<style lang="scss">
.main {
  @include container;

  padding-bottom: $space-l;
}
</style>
