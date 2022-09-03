<template>
  <button class="burger" @click="emitClickBtn">
    <div class="burger__icon-box">
      <slot name="default"> </slot>
    </div>
  </button>
</template>

<script>
export default {
  name: "AppBurger",

  methods: {
    emitClickBtn() {
      this.$emit("clickBtn")
    },
  },
}
</script>
