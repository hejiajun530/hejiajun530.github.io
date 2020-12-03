<template>
  <div class="arch text-left d-flex jc-start ai-start">
    <!-- 没有文章 -->
    <div
      class="arch-noarticle text-left"
      v-if="archlist.length == 0"
    >
      您还没有发表过文章，快去发表文章吧~
    </div>
    <!-- 年份 分组 -->
    <div class="arch-yearlist">
      <!-- <div
        class="arch-yearlist-item"
        v-for="item in archlist"
        :key="item.id"
      ><a :href="'#' + item.time">{{item.time}}</a></div> -->
      <div
        class="arch-yearlist-item pointSB"
        :class="yearIndex == index ? 'active' : ''"
        v-for="(item, index) in archlist"
        :key="item.id"
        @click="handleClickYearShow(index)"
      >{{item.time}}</div>
    </div>
    <!-- 文章 分组 -->
    <div class="arch-timelist flex-1">
      <template v-for="(item, index) in archlist">
        <div
          class="arch-timelist-item"
          v-show="index >= yearIndex"
          :key="item.id"
        >
          <div
            class="arch-timelist-item-title"
            :id="item.time"
          >{{item.time}}</div>
          <div
            class="arch-timelist-item-articlelist"
            v-for="item in item.data"
            :key="item.articleid"
          >
            <div class="arch-timelist-item-articlelist-subitem d-flex jc-start ai-center">
              <div class="arch-timelist-item-articlelist-subitem-time">{{toymd(item.createTime, 'mm-dd')}}</div>
              <div
                class="arch-timelist-item-articlelist-subitem-title pointSB"
                @click="$router.push(`/home/articledetail?articleid=${item.articleid}`)"
              >
                <p
                  class="text-ellipsis"
                  :style="$parent.phoneFlag ? 'width: 12.5rem;' : ''"
                >{{item.title}}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      archlist: [],
      yearIndex: 0
    };
  },
  created() {
    const _self = this;
    console.log(_self.$parent.tyqUser.userid);
    _self.handleGetArticleListArch();
  },
  mounted() {},
  methods: {
    // 控制文章列表显示
    handleClickYearShow(index) {
      const _self = this;
      _self.yearIndex = index;
    },
    // 根据用户id获取文章列表 进行归档
    handleGetArticleListArch() {
      const _self = this;
      _self.$http
        .get(`/getArticleListByIdArch?userid=${_self.$parent.tyqUser.userid}`)
        .then(res => {
          let templist = [];
          templist = res.data.res;
          // console.log(templist);
          // 取出年份
          let yearlist = [];
          templist.forEach((item, index) => {
            yearlist.push(_self.toymd(item.createTime, 'yy'));
          });
          // 去重 去掉重复的年份
          yearlist = _self.unique(yearlist);
          // console.log(yearlist);
          // 根据年份分组
          yearlist.forEach((item, index) => {
            let a = templist.filter((subitem, subindex) => {
              return _self.toymd(subitem.createTime, 'yy') == yearlist[index];
            });
            _self.archlist.push({
              time: item,
              data: a
            });
          });
          console.log(_self.archlist);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.arch {
  width: 100%;
  overflow: hidden;
  .arch-noarticle {
    padding: 1.25rem 0;
    font-size: 1.375rem;
  }
  .arch-yearlist {
    padding: 0 1.875rem 0 0.9375rem;
    .arch-yearlist-item {
      padding: 0.625rem 0.9375rem;
      background: #ffffff;
      // background: rebeccapurple;
      &:last-child {
        border-bottom: 0.0625rem solid #dddddd;
      }
      &.active,
      &:hover {
        background: #db6d4c;
        color: #ffffff;
      }
    }
  }
  .arch-timelist {
    background: url('../../assets/img/dian3.png') repeat-y 4.375rem;
    background-size: 0.25rem;
    .arch-timelist-item {
      .arch-timelist-item-title {
        background: url('../../assets/img/jian.png') no-repeat 1.25rem -3.125rem;
        background-size: 2.1875rem;
        font-size: 1.5rem;
        margin: 0 0 0.625rem 2.6875rem;
        padding: 0 0 0 3.125rem;
        font-family: Georgia;
        font-style: italic;
        color: #db6d4c;
      }
      .arch-timelist-item-articlelist {
        .arch-timelist-item-articlelist-subitem {
          height: 3.4375rem;
          background: url('../../assets/img/jian.png') no-repeat 4.1875rem -4.625rem;
          background-size: 2.1875rem;
          .arch-timelist-item-articlelist-subitem-time {
            width: 5.625rem;
            margin: 0 1.25rem 0 0;
          }
          .arch-timelist-item-articlelist-subitem-title {
            position: relative;
            // width: 43.75rem;
            width: 100%;
            height: 2.8125rem;
            background: #ffffff;
            padding: 0 0 0 0.9375rem;
            line-height: 2.8125rem;
            box-shadow: 0 0.125rem 0.3125rem #dddddd;
            p {
              width: 100%;
            }
            &::before {
              content: '';
              position: absolute;
              top: 50%;
              left: -0.625rem;
              display: block;
              width: 1.5625rem;
              height: 1.5625rem;
              background: url('../../assets/img/jian.png') -1.3125rem -0.5625rem
                no-repeat;
              background-size: 2.1875rem;
              transform: translate(0, -50%);
            }
          }
        }
      }
    }
  }
}
</style>