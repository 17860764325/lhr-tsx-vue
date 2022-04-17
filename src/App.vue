<template>
  <div>
    <div>
      <el-menu class="el-menu-demo"
               mode="horizontal">
        <el-menu-item index="1">
          <h3s>Mr.L & Mr.T</h3s>
        </el-menu-item>
        <el-menu-item index="1">
          <router-link to='/home'>主页 </router-link>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <router-link to='/course'>资料 </router-link>
          </template>
          <el-submenu index="2-1">
            <template slot="title">游戏</template>
            <el-menu-item index="2-1-1">破解教程</el-menu-item>
            <el-menu-item index="2-1-2">通关攻略</el-menu-item>
            <el-menu-item index="2-1-3">boss打法详解</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">家具</template>
            <el-menu-item index="2-2-1">木质</el-menu-item>
            <el-menu-item index="2-2-2">桌子</el-menu-item>
            <el-menu-item index="2-2-3">书柜</el-menu-item>
          </el-submenu>
          <el-submenu index="2-3">
            <template slot="title">旅游</template>
            <el-menu-item index="2-3-1">上海</el-menu-item>
            <el-menu-item index="2-3-2">青岛</el-menu-item>
            <el-menu-item index="2-3-3">赤峰</el-menu-item>
          </el-submenu>
          <el-submenu index="2-4">
            <template slot="title">编程</template>
            <el-menu-item index="2-4-1">java</el-menu-item>
            <el-menu-item index="2-4-2">mysql</el-menu-item>
            <el-menu-item index="2-4-3">redis</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">笔记发布</el-menu-item>
        <el-menu-item index="4">笔记管理</el-menu-item>
      </el-menu>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
.el-menu-demo {
  background-color: #fffafa;
  border-radius: 20px;
  border: 1px solid black;
}
</style>
