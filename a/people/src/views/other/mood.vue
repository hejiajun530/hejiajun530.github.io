<template>
  <div
    class="mood text-left"
    :style="phoneFlag ? 'padding: 0;' : ''"
  >
    <!-- 搜索按钮/搜索框 -->
    <div class="mood-search">
      <input
        type="text"
        v-model.trim="title"
        placeholder="请输入歌名/演唱者"
      >
      <button
        class="pointSB"
        @click="handleClickGetMusic"
      >搜索歌曲</button>
    </div>
    <!-- 没有歌曲时的提示 -->
    <div
      class="mood-nomusic"
      v-if="!musiclist.length"
    >
      没有歌曲，快去提醒博主添加吧~
    </div>
    <!-- 歌曲列表 -->
    <musiclist
      v-else
      :musiclist="musiclist"
    ></musiclist>
    <!-- 分页 -->
    <pageing
      :num="total"
      @g-getpage="handleClickChangePage"
    ></pageing>
    <!-- <div style="width: 300px; height: 200px">
      <videoImg></videoImg>
    </div> -->
  </div>
</template>

<script>
import musiclist from '../musiclist/index';
import pageing from '@/components/pageing/index';
import videoImg from '@/components/videoImg/index';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    videoImg,
    musiclist,
    pageing
  },
  data() {
    return {
      musiclist: [],
      query: {
        page: 1,
        num: 7
      },
      total: 0,
      title: ''
    };
  },
  methods: {
    // 视频第一帧作为封面
    // vSetImg(obj) {
    //   const _self = this;
    //   _self.$refs.video.onloadeddata = () => {
    //     const canvas = document.createElement('canvas');
    //     canvas.width = 300;
    //     canvas.height = 100;
    //     canvas
    //       .getContext('2d')
    //       .drawImage(obj, 0, 0, canvas.width, canvas.height);
    //     obj.setAttribute('poster', canvas.toDataURL('image/png'));
    //     //插入img标签查看封面图（调试用）
    //     const img = document.createElement('img');
    //     img.src = canvas.toDataURL('image/png');
    //     document.querySelector('.mood').appendChild(img);
    //   };
    // },
    // 获取音乐列表
    handleClickChangePage(num) {
      const _self = this;
      _self.$set(_self.query, 'page', num);
      _self.$http.post('/getMusicList', _self.query).then(res => {
        _self.musiclist = res.data.res;
        if (_self.musiclist[0].total) {
          _self.total = Math.ceil(_self.musiclist[0].total / _self.query.num);
        }
        console.log(_self.musiclist, 'musiclist');
      });
    },
    // 搜索音乐
    handleClickGetMusic() {
      const _self = this;
      if (_self.title) {
        _self.$http.get(`/getMusicByText?title=${_self.title}`).then(res => {
          console.log(res);
          if (res.data.res) {
            _self.musiclist = res.data.res;
            _self.total = 0;
          }
        });
      } else {
        _self.handleClickChangePage(1);
      }
    }
  },
  created() {
    const _self = this;
    _self.handleClickChangePage(1);
  },
  mounted() {
    const _self = this;
    // _self.vSetImg(_self.$refs.video);
  }
};
</script>

<style lang="scss" scoped>
.mood {
  padding: 0 0.625rem 0 0;
  .mood-search {
    input {
      width: 21.875rem;
      height: 2.1875rem;
      padding: 0 0 0 0.9375rem;
      border: 0.0625rem solid #dddddd;
      border-radius: 2.1875rem;
    }
    button {
      min-width: 5.625rem;
      height: 2.1875rem;
      background: #000000;
      color: #ffffff;
      border-radius: 2.1875rem;
      margin: 0 0 0 1.25rem;
    }
  }
  .mood-nomusic {
    font-size: 1.375rem;
    padding: 1.875rem 0 1.875rem 1.875rem;
  }
  video {
    width: 31.25rem;
  }
}
</style>