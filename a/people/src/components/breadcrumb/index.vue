<template>
  <div class="breadcrumb">
    您的位置: {{value}}
  </div>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      breadList: [],
      value: ''
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    },
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter((item) => item.name);
      this.breadList = matched;
      console.log(this.breadList);
      this.breadList.map(item => {
        this.value += '>' + item.meta.title;
      })
    },
  },
};
</script>

<style scoped>
</style>