<template>
  <div class="hometitle text-left">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hometitle {
  border-bottom: 5px solid orangered;
  padding: 10px 0;
  margin: 0 0 30px 0;
  font-size: 18px;
}
</style>