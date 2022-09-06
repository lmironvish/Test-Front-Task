<template>
  <div class="title">
    <p class="title__caption">ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ</p>
  </div>
</template>

<script>
export default {
  name: "TheTitle",
}
</script>

<style lang="scss">
.title {
  @include container;
}

.title__caption {
  // @include caption-h1;

  // margin-bottom: $space-m;

  color: $var-color-black;
  text-align: center;
}
</style>
