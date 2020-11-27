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
  border-bottom: 0.3125rem solid orangered;
  padding: 0.625rem 0;
  margin: 0 0 1.875rem 0;
  font-size: 1.125rem;
}
</style>