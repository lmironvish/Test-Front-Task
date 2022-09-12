<template>
  <div class="title">
    <p class="title__caption">
      <slot name="default"></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "AppTitle",
}
</script>

<style lang="scss">
.title__caption {
  color: #ffcc64;
  font-weight: 700;
  font-size: 40px;
  font-family: Futura, sans-serif;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
}
</style>
