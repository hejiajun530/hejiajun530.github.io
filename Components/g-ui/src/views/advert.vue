<template>
  <div class="home-alert">
    <!-- advert 广告条 -->
    <g-advert
      direction="column"
      :title="title"
      type="info"
    ></g-advert>
    <g-advert
      direction="row"
      :title="title"
      type="success"
    ></g-advert>
  </div>
</template>
<script>
import advert from "@/components/advert/index";
export default {
  data() {
    return {
      title: [
        "这是广告语111111",
        "这是广告语22222",
        "这是广告语33333",
        "这是广告语55555"
      ]
    };
  },
  components: {
    "g-advert": advert
  },
  methods: {}
};
</script>