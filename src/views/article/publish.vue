<style lang="less">
@import "../../styles/loading.less";
.article_top {
  width: 100%;
  background-color: white;
  margin: 20px 0;
  padding: 20px;
}
.article_top_item {
  width: 100%;
  margin: 8px 0;
  background-color: white;
}
.article_top_item > div {
  display: inline-block;
}
.article_top_item > div:nth-of-type(1) {
  width: 130px;
  font-size: 16px;
  font-weight: 400;
  color: black;
}
.border {
  border: 1px silver solid;
  padding: 2px;
  margin: 4px 0;
}
.lbbutton {
  padding: 4px;
  font-size: 14px;
}
.lbyihang {
  white-space: nowrap;
}

.leftwidth {
  width: 820px;
}
.flex_crosswise {
  display: flex;
}
.lbleft {
  width: 830px;
}
.width_130 {
  width: 130px;
}
.article_bottom {
  width: 100%;
  background-color: white;
  height: 50px;
  text-align: right;
}
.buttom_button {
  height: 100%;
  width: 120px;
}
</style>

<template>
    <div style="width:1000px;margin:0 auto;">
        <div class="article_top">
            <div class="article_top_item">
                <div>分类</div>
                <div>
                    <Select v-model="model1" style="width:200px">
                        <Option v-for="item in cityList" :value="item.value" :key="item.label">{{ item.label }}</Option>
                    </Select>
                    <Button type="ghost" shape="circle">显示不常用项</Button>
                </div>
            </div>
            <div class="article_top_item">
                <div>文章来自</div>
                <div>
                   <Input v-model="value" placeholder="请输入..." style="width: 200px"></Input>
                </div>
            </div>
            <div class="article_top_item">
                <div>地区</div>
                <div>
                    <div class="border leftwidth">
                        <Button type="primary" shape="circle" class="lbbutton">河南<Icon type="android-cancel" size='16' style="margin:0 6px;"></Icon></Button>
                    </div>
                    <div>
                        <Button type="ghost" shape="circle">河南</Button>
                    </div>
                </div>
            </div>
            <div class="article_top_item">
                <div>行业</div>
                <div>
                   <div class="border leftwidth">
                        <Button type="primary" shape="circle" class="lbbutton">河南<Icon type="android-cancel" size='16' style="margin:0 6px;"></Icon></Button>
                    </div>
                    <div>
                        <Button type="ghost" shape="circle">河南</Button>
                    </div>
                </div>
            </div>
        </div>
        <Card shadow>
            <div>
                <div><input type="text" placeholder="添加封面" style="width:90%;height:40px;vertical-align: bottom;"><span style="width:10%;height:40px;background-color:#f0f0f0;display: inline-block;line-height: 40px;text-align: center;">+文章封面</span> </div>
                <div><input type="text" placeholder="添加摘要" style="width:100%;height:50px;"></div>
            </div>
            <textarea class='tinymce-textarea' id="tinymceEditer" onpaste='onpaste()'></textarea>
            <div>
                <div class="article_top_item">
                    <div>关键词标签</div>
                    <div>
                        <div class="border leftwidth">
                            <Button type="primary" shape="circle" class="lbbutton">河南<Icon type="android-cancel" size='16' style="margin:0 6px;"></Icon></Button>
                        </div>
                    </div>
                </div>
                <div class="article_top_item flex_crosswise">
                    <div></div>
                    <div class="lbleft">
                        <div class="lbyihang"><input v-model="value13"><Button slot="append" icon="ios-search"></Button></input><Button type="info">获取全部标签</Button><Button type="info">智能获取标签</Button></div>
                        <div style="width:100%;overflow:auto;">
                            <Tabs value="name1">
                                <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
                                <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
                                <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
                                <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
                                <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
                                <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
                                <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
                                <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
                                <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
                                <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
                                <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
                                <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
                                <Tab-pane label="标签一" name="name1">标签一的内容</Tab-pane>
                                <Tab-pane label="标签二" name="name2">标签二的内容</Tab-pane>
                                <Tab-pane label="标签三" name="name3">标签三的内容</Tab-pane>
                            </Tabs>
                        </div>
                        <div><Button type="ghost" shape="circle">河南</Button></div>
                        
                    </div>
                </div>
            </div>
        </Card>
        <div class="article_top">
            <div class="flex_crosswise">
                <div class="width_130">权限内容<br/>(登陆可见)</div>
                <div class="lbleft">
                    <Card shadow>
                        <textarea class='tinymce-textarea' id="tinymceEditer1"></textarea>
                    </Card>
                </div>
            </div>
             <div class="flex_crosswise">
                <div class="width_130">上传附件</div>
                <div class="lbleft">
                    <Upload multiple action="//jsonplaceholder.typicode.com/posts/">
                        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
                    </Upload>
                </div>
            </div>
        </div>
         <div class="article_bottom">
           <Button type="ghost" class="buttom_button">取消</Button>
           <Button type="info" class="buttom_button" @click="publish">提交</Button>
        </div>
        <Spin fix v-if="spinShow">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载组件中...</div>
        </Spin>
    </div>
</template>

<script>
import tinymce from "tinymce";
import util from "../../libs/util.js";
export default {
  name: "text-editor",
  data() {
    return {
      model1: "",
      spinShow: true,
      cityList: [
        {
          value: "beijing",
          label: "北京市"
        },
        {
          value: "shanghai",
          label: "上海市"
        }
      ]
    };
  },
  methods: {
    onpaste(e){
      console.log(e,'qqqqqqqqqqqqqqq')
    },
    publish(){
      console.log(tinymce.get("tinymceEditer").getContent(),'rrrrrrrrrrrrrrrrr')
    },
    init() {
     util.ajax.post('report/get_lists',{
         type:1
     })
      this.$nextTick(() => {
        let vm = this;
        let height = document.body.offsetHeight - 300;
        tinymce.init({
          selector: "#tinymceEditer",
          branding: false,
          elementpath: false,
          height: height,
          language: "zh_CN.GB2312",
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools",
            "searchreplace visualblocks visualchars code fullpage",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons paste textcolor colorpicker textpattern imagetools codesample"
          ],
          toolbar1:
            " newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample",
          autosave_interval: "20s",
          image_advtab: true,
          table_default_styles: {
            width: "100%",
            borderCollapse: "collapse"
          },
          setup: function(editor) {
            editor.on("init", function(e) {
              vm.spinShow = false;
              if (localStorage.editorContent) {
                tinymce
                  .get("tinymceEditer")
                  .setContent(localStorage.editorContent);
              }
            });
            editor.on("paste", function(e) {
              console.log(e,'wwwwwww',this)
            });
          }
        });
        tinymce.init({
          selector: "#tinymceEditer1",
          branding: false,
          elementpath: false,
          height: 230,
          language: "zh_CN.GB2312",
          menubar: false,
          plugins: [],
          toolbar1:
            " newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample",
          autosave_interval: "20s",
          image_advtab: true,
          table_default_styles: {
            width: "100%",
            borderCollapse: "collapse"
          },
          setup: function(editor) {
            editor.on("init", function(e) {
             
            });
            editor.on("keydown", function(e) {
             
            });
          }
        });
      });
    }
  },
  mounted() {
    this.init();
    console.log(this.$route.query.id, "rrrrrrrrrrrrr");
  },
  destroyed() {
    tinymce.get("tinymceEditer").destroy();
  }
};
</script>

<style>

</style>
