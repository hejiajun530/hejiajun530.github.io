<template>
  <div class="musiclist">
    <!-- 音乐播放列表 -->
    <!-- table 表格 -->
    <g-table :data="musiclist">
      <g-tableColumn
        label="封面"
        prop="text"
      >
        <template slot-scope="scope">
          <img
            class="cover"
            v-if="scope.row.text"
            :src="scope.row.text"
          >
          <img
            src="../../assets/logo.png"
            v-else
            class="cover"
          >
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="歌名"
        prop="title"
      >
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="演唱者"
        prop="auther"
      >
        <template slot-scope="scope">
          {{scope.row.auther}}
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="上传时间"
        prop="createTime"
      >
        <template slot-scope="scope">
          {{toymd(scope.row.createTime, 'yy-mm-dd hh:mm:ss')}}
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="播放"
        prop="content"
      >
        <template slot-scope="scope">
          <!-- <button
            class="me-button pointSB"
            style="margin-right: 5px;"
            @click="handleClickPlayMusic(scope.row.content)"
          >播放</button> -->
          <i
            class="iconfont"
            :class="musicid == scope.row.music && stopFlag ? 'icon-bofang' : 'icon-iconset0481'"
            @click="handleClickPlayMusic(scope.row)"
          ></i>
        </template>
      </g-tableColumn>
    </g-table>
    <!-- <audio
      ref="audio"
      autoplay
      :src="audioSrc"
    >
    </audio> -->
  </div>
</template>

<script>
import table from '@/components/table/index';
import tableColumn from '@/components/table/tableColumn';
export default {
  props: {
    musiclist: {
      type: Array
    }
  },
  components: {
    'g-table': table,
    'g-tableColumn': tableColumn
  },
  data() {
    return {
      audioSrc: '', //音乐文件路径
      musicid: '', //点击的音乐播放歌曲id
      stopFlag: false, //控制是否暂停
      loadFlag: true //控制是否要加载
    };
  },
  created() {
    const _self = this;
    console.log(_self.musiclist);
  },
  mounted() {},
  watch: {
    audioSrc() {
      const _self = this;
      _self.stopFlag = true;
      _self.loadFlag = false;
      console.log(_self.audioSrc + '改变了');
    }
  },
  methods: {
    // 播放音乐
    handleClickPlayMusic(data) {
      const _self = this;
      let audio = document.querySelector('#audioTyq');
      // console.log(data);
      _self.musicid = data.music;
      if (data.content != _self.audioSrc) {
        _self.audioSrc = data.content;
        audio.src = _self.audioSrc;
      } else {
        _self.audioSrc = data.content;
      }
      // let audio = _self.$refs.audio;
      // console.log(_self.$refs.audio.paused);
      if (audio.paused) {
        // audio.load();
        // audio.play();
        if (_self.loadFlag) {
          audio.onload = () => {
            audio.play();
            _self.stopFlag = true;
            console.log('现在播放-onload');
          };
        } else {
          audio.play();
          _self.stopFlag = true;
          console.log('现在播放-play');
        }
      } else {
        audio.pause();
        _self.stopFlag = false;
        console.log('现在暂停');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.musiclist {
  .iconfont {
    font-size: 30px;
  }
  .cover {
    height: 100%;
  }
}
</style>