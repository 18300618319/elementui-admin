<style lang="less">
@import "../../styles/common.less";
@import "./table.less";
</style>

<template>
    <div>
        <Row :gutter="10">
            <Col span="24">
                <Card>
                    <p slot="title" style="height:auto">
                        <Button type="text"><router-link to="/article/publish">添加</router-link></Button>
                        <Button type="text">放入回收站</Button>
                        <Button type="text"><router-link :to="{ path: '/article/publish', query: { id: 'private' }}">修改</router-link></Button>
                        <Button type="text">刷新</Button>
                        <Button type="text">推送订阅用户</Button>
                        <Button type="text">推送所有用户</Button>
                    </p>
                    <Row>
                        <Input v-model="searchConName3" placeholder="请输入关键字" style="width: 200px" />
                        <Date-picker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px" @on-change='date'></Date-picker>
                        <span @click="handleSearch3" style="margin: 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
                    </Row>
                    <Row class="margin-top-10 searchable-table-con1">
                        <Table :columns="columns1" :data="data3" border=true @on-selection-change='selection'></Table>
                    </Row>
                </Card>
                <Page :total="100" :current="1" @on-change="changePage"></Page>
            </Col>
        </Row>
    </div>
</template>

<script>
import util from "../../libs/util";
export default {
  name: "searchable-table",
  data() {
    return {
      searchConName3: "",
      columns1: [
        {
          type: "selection",
          title: "",
          width: 50
        },
        {
          key: "name",
          title: "作者"
        },
        {
          key: "name",
          title: "状态"
        },
        {
          key: "name",
          title: "标题"
        },
        {
          key: "name",
          title: "文章类型"
        },
        {
          key: "name",
          title: "关键词"
        },
        {
          key: "name",
          title: "发布时间"
        },
        {
          key: "name",
          title: "排序"
        },
        {
          key: "name",

          title: "是否首页推荐"
        },
        {
          key: "name",

          title: "是否首页幻灯片"
        },
        {
          key: "name",

          title: "是否允许评论"
        },
        {
          key: "name",
          title: "操作"
        }
      ],
      data3: [
        {
          name: "Aresn",
          tel: "17712345678"
        },
        {
          name: "Lison",
          tel: "17787654321"
        },
        {
          name: "Lili",
          tel: "12212345678"
        },
        {
          name: "Lucy",
          tel: "13312345678"
        }
      ],
      initTable3: []
    };
  },
  methods: {
    date(e) {
      console.log(e, "hhhhhhhhhhhhhhhhh");
    },
    changePage(e) {
      console.log(e, "aaaaaaaaaaaaaaaa");
    },
    selection(e) {
      console.log(e, "bbbbbbbbbbbbbb");
    },
    init() {
      
    },
    search(data, argumentObj) {
      let res = data;
      let dataClone = data;
      for (let argu in argumentObj) {
        if (argumentObj[argu].length > 0) {
          res = dataClone.filter(d => {
            return d[argu].indexOf(argumentObj[argu]) > -1;
          });
          dataClone = res;
        }
      }
      return res;
    },
    handleSearch1() {
      this.data1 = this.initTable1;
      this.data1 = this.search(this.data1, { name: this.searchConName1 });
    },
    handleSearch2() {
      this.data2 = this.initTable2;
      this.data2 = this.search(this.data2, {
        name: this.searchConName2,
        tel: this.searchConTel2
      });
    },
    handleSearch3() {
      this.data3 = this.initTable3;
      this.data3 = this.search(this.data3, { name: this.searchConName3 });
      console.log(this.data3);
    },
    handleCancel3() {
      this.data3 = this.initTable3;
    }
  },
  mounted(e) {
    this.init();
  }
};
</script>
