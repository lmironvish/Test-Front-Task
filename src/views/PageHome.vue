<template>
  <div class="home">
    <AppTitle class="home__title">Они должны что-то знать</AppTitle>
    <ThePageHomeSlider class="home__slider" />
    <AppLink class="home__link-kinopoisk" :data-item="linkKinopoisk"
      >hd.kinopoisk.ru</AppLink
    >
    <AppLink class="home__link-scroll" :data-item="linkKinopoisk" icon="left">
      <template #default>Скрольте вниз</template>
      <template #icon>
        <IconArrowLong class="home__link-scroll-icon" />
      </template>
    </AppLink>
    <AppLink class="home__link-promo" :data-item="linkKinopoisk" icon="right">
      <template #default>Искать промокод</template>
      <template #icon>
        <IconArrowShort class="home__link-promo-icon" />
      </template>
    </AppLink>
    <AppSideMenu />
  </div>
</template>

<script>
import ThePageHomeSlider from "@/components/ThePageHomeSlider"
import AppTitle from "@/components/AppTitle"
import AppLink from "@/components/AppLink"
import AppSideMenu from "@/components/AppSideMenu"
import IconArrowLong from "@/components/icons/IconArrowLong"
import IconArrowShort from "@/components/icons/IconArrowShort"

export default {
  name: "PageHome",

  components: {
    ThePageHomeSlider,
    IconArrowLong,
    IconArrowShort,
    AppSideMenu,
    AppTitle,
    AppLink,
  },

  data() {
    return {
      linkKinopoisk: {
        link: "https://hd.kinopoisk.ru",
        tag: "a",
        to: null,
        target: null,
      },
    }
  },
}
</script>

<style lang="scss">
.home {
  @include container;

  position: relative;

  width: 100%;
}

.home__link-kinopoisk {
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 10;

  transform: translate(0%, -50%) rotate(90deg);
}

.home__link-scroll {
  position: absolute;
  bottom: -30%;
  left: -3%;
  z-index: 10;

  transform: translate(0%, -50%) rotate(-90deg);
}
</style>
