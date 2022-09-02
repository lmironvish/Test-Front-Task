<template>
  <nav>
    <AppBurger></AppBurger>
    <AppLogo></AppLogo>
  </nav>
</template>

<script>
import AppBurger from "@/components/AppBurger"
import AppLogo from "@/components/AppLogo"

export default {
  name: "TheHeader",

  components: {
    AppBurger,
    AppLogo,
  },
}
</script>
