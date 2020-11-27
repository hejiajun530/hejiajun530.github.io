<template>
  <div class="postlist">
    <h3 class="me-title positionTopLeft">文章列表</h3>
    <!-- table 表格 -->
    <g-table :data="articleList">
      <g-tableColumn
        label="标题"
        prop="title"
        width="150"
      >
        <template slot-scope="scope">
          {{scope.row.title}}
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="分类"
        prop="category"
      >
        <template slot-scope="scope">
          {{scope.row.category}}
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="标签"
        prop="tag"
      >
        <template slot-scope="scope">
          <g-tag :taglist="scope.row.tag.split(',')"></g-tag>
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="发表时间"
        prop="createTime"
      >
        <template slot-scope="scope">
          {{toymd(scope.row.createTime, 'yy-mm-dd hh:mm:ss')}}
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="作者"
        prop="username"
      >
        <template slot-scope="scope">
          {{scope.row.username}}
        </template>
      </g-tableColumn>
      <g-tableColumn
        label="操作"
        type="make"
      >
        <template slot-scope="scope">
          <button
            class="me-button pointSB"
            style="margin-right: 5px;"
            @click="handleClickEditTabelData(scope.row)"
          >编辑</button>
          <button
            class="me-button pointSB"
            @click="handleClickDelTabelData(scope.row)"
          >删除</button>
        </template>
      </g-tableColumn>
    </g-table>
    <!-- 分页 -->
    <div class="postlist-pageing">
      <g-pageing
        :num="total"
        @g-getpage="handleClickChangePage"
      ></g-pageing>
    </div>
    <!-- 没有文章时 -->
    <div
      class="postlist-noarticle text-left"
      v-if="articleList.length == 0"
    >
      您还没有发表过文章，快去发表文章吧~
    </div>
  </div>
</template>

<script>
import tag from '@/components/tag/index';
import table from '@/components/table/index';
import tableColumn from '@/components/table/tableColumn';
import pageing from '@/components/pageing/index';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    'g-tag': tag,
    'g-table': table,
    'g-tableColumn': tableColumn,
    'g-pageing': pageing
  },
  data() {
    return {
      articleList: [],
      query: {
        page: 1,
        num: 3,
        userid: ''
      },
      total: 1
    };
  },
  methods: {
    // 删除数据
    handleClickDelTabelData(row) {
      var _self = this;
      console.log(row);
      _self.$gAlert({
        title: '删除文章',
        content: `您确定删除文章 '${row.title}' 吗`,
        btn: {
          confirmVal: '确定',
          cancelVal: '取消'
        },
        success: function(res) {
          // console.log(res, 'res--------');confirm
          if (res == 'confirm') {
            _self.$http
              .get(`/delArticleById?articleid=${row.articleid}`)
              .then(res => {
                console.log(res);
                if (res.data.flag) {
                  _self.$gMessage({
                    title: `删除文章 '${row.title}' 成功`,
                    duration: 2000,
                    type: 'success'
                  });
                  _self.handleClickChangePage(_self.query.page);
                }
              });
          }
        }
      });
    },
    // 跳转到编辑页面
    handleClickEditTabelData(row) {
      var _self = this;
      _self.$router.push('/me/post?articleid=' + row.articleid);
    },
    // 获取改变的页码
    handleClickChangePage(num) {
      // 使用$emit传值,用形参接收
      var _self = this;
      // console.log(num);
      _self.$set(_self.query, 'page', num);
      _self.$set(_self.query, 'userid', _self.tyqUser.userid);
      _self.$http.post('/getArticleListById', _self.query).then(res => {
        console.log(res.data);
        if (!res.data.flag) {
          _self.$gMessage({
            title: '文章列表获取失败',
            duration: 2000,
            type: 'error'
          });
        } else {
          _self.articleList = res.data.res;
          _self.total = Math.ceil(res.data.total[0].total / _self.query.num);
          // console.log(_self.total, 'total');
        }
      });
    }
  },
  created() {
    var _self = this;
    _self.handleClickChangePage(1);
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.postlist {
  position: relative;
  padding: 3.125rem 0 0 0;
  .postlist-pageing {
    width: 31.25rem;
    margin: 0.625rem 0 0 0;
  }
  .postlist-noarticle {
    padding: 1.25rem 0;
    font-size: 1.375rem;
  }
}
</style>