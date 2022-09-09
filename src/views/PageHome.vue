<template>
  <div class="home">
    <AppTitle class="home__title">Они должны что-то знать</AppTitle>
    <ThePageHomeSlider class="home__slider" />
    <AppLink class="home__link-kinopoisk" :data-item="linkKinopoisk"
      >hd.kinopoisk.ru</AppLink
    >
    <AppSideMenu>
      <template #numeration>Скрольте вниз</template>
      <template #content>Скрольте вниз</template>
    </AppSideMenu>
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
    AppTitle,
    AppSideMenu,
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
  position: relative;

  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 34px;
}

.home__title {
  margin-bottom: 30px;
}

.home__slider {
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 34px;
}

.home__link-kinopoisk {
  position: absolute;
  top: 50%;
  right: 24px;
  z-index: 10;

  transform: translate(0%, 100%) rotate(90deg);
  transform-origin: top right;
}

.home__link-scroll {
  position: absolute;
  bottom: 24px;
  left: 24px;
  z-index: 10;

  transform: translate(0%, 0%) rotate(-90deg);
  transform-origin: top left;
}

.home__link-promo {
  margin-bottom: auto;
}
</style>
