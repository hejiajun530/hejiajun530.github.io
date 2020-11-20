<template>
  <div class="postlist">
    <h3 class="me-title positionTopLeft">文章列表</h3>
    <!-- table 表格 -->
    <g-table :data="articleList">
      <g-tableColumn
        label="标题"
        prop="title"
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
          <div
            class="postlist-tag pointSB"
            v-for="item in scope.row.tag.split(',')"
            :key="item"
          >
            {{item}}
          </div>
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
    <div class="postlist-pageing">
      <g-pageing
        :num="total"
        @g-getpage="handleClickChangePage"
      ></g-pageing>
    </div>
  </div>
</template>

<script>
import { toymd } from '@/commons/date.js';
import table from '@/components/table/index';
import tableColumn from '@/components/table/tableColumn';
import pageing from '@/components/pageing/index';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
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
    // 时间转换格式
    toymd: toymd,
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
      _self.$http.post('/getArticleList', _self.query).then(res => {
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
    width: 500px;
    margin: 10px 0 0 0;
  }
  .postlist-tag {
    padding: 0.125rem 0.225rem;
    background: skyblue;
    margin: 0 0.1875rem;
  }
}
</style>