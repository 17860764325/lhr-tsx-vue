  <template>
  <div>
    <h1 class="title">笔记网站主页</h1>
    <el-row class="imgBox">
      <img class="homeImg"
           src='../../static/image/home.jpg' />
    </el-row>
    <el-row>
      <el-col class="part"
              :span="8">
        <h2>笔记分类1</h2>
        <el-tree :data="data"
                 :props="defaultProps"
                 @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col class="part"
              :span="8">
        <h2>笔记分类2</h2>
        <el-tree :data="data"
                 :props="defaultProps"
                 @node-click="handleNodeClick"></el-tree>
      </el-col>
      <el-col class="part"
              :span="8">
        <h2>笔记分类3</h2>
        <el-tree :data="data"
                 :props="defaultProps"
                 @node-click="handleNodeClick"></el-tree>
      </el-col>
    </el-row>
  </div>
</template>
  
  <script>
//引入api.js  好调用里面的接口
import { api } from '../../api/api.js';
export default {
  name: 'login',
  data () {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }

    }
  },
}
 </script>
 
<style>
.title {
  text-align: center;
}
.homeImg {
  width: 100%;
  border: 3px solid black;
  border-radius: 20px;
}
.imgBox {
  padding: 10px;
}
h2 {
  text-align: center;
}
.part {
  border: 3px solid black;
  padding: 10px;
}
</style>