<template>
  <nav>
    <AppBurger><IconBurger /></AppBurger>
    <AppLogo></AppLogo>
  </nav>
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
