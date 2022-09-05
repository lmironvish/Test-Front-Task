<template>
  <div class="header">
    <AppBurger class="header__burger">
      <IconBurger class="header__burger-icon" />
    </AppBurger>
    <AppLogo class="header__logo"></AppLogo>
  </div>
</template>

<script>
import AppBurger from "@/components/AppBurger"
import AppLogo from "@/components/AppLogo"
import IconBurger from "@/components/icons/IconBurger"

export default {
  name: "TheHeader",

  components: {
    AppBurger,
    AppLogo,
    IconBurger,
  },
}
</script>

<style lang="scss">
.header {
  @include container;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px 34px;
}

.header__logo {
  color: $var-color-black;
}

.header__burger {
  position: absolute;
  top: 37px;
  left: 34px;
}
</style>
