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
import { getClassification } from '../../api/home/api.js';
export default {
  name: 'login',
  data () {
    return {
      data: undefined,
      defaultProps: {
        children: 'children',
        label: 'name'
      }

    }
  },
  async created () {
    await getClassification().then(res => {
      this.data = res.data.data;
    })


  },
  methods: {

  }
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