<template>
  <div class="liuyan">
    <hometitle>
      <strong>您现在的位置：</strong> <i>首页</i> > <i>留言</i>
    </hometitle>
    <!-- <comment :articleid="13"></comment> -->
    <comment :articleid="20"></comment>
  </div>
</template>

<script>
import hometitle from '../hometitle';
import comment from './comment/comment';
export default {
  components: {
    comment,
    hometitle
  },
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
.liuyan {
  padding: 0 10px;
}
</style>