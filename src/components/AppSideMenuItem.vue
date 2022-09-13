<template>
  <div>
    <a href="https://web.teletask.app/#/group/802/task/40" class="menu-item">
      <span class="menu-item__id">
        <slot name="default" />
      </span>
      <span class="menu-item__content">
        <slot name="content" />
      </span>
    </a>
    <br />
  </div>
</template>

<script>
export default {
  name: "AppSideMenuItem",

  // methods: {
  //   emitClickBtn() {
  //     this.$emit("clickBtn")
  //   },
  // },
}
</script>

<style lang="scss">
.menu-item {
  display: inline-block;
  min-width: 10px;
  padding-top: 20px;

  padding-bottom: 3px;

  color: #000000;

  font-family: Kinopoisk, sans-serif;

  text-decoration: none;

  border-bottom: 1px solid #000000;

  &__id {
    padding-right: 10px;

    font-weight: 700;
  }
}

// .menu-item__icon-box {
//   display: block;
//   margin: 0;
//   padding: 0;

//   background: none;
//   border: none;
// }
</style>
