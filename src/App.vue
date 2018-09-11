<template>
<div id="app">
  <div id="nav">
    <el-row>
      <el-col :span="24">
        <el-card class="app-nav">
          Movie DB UI
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card>
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
  <router-view/>
</div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
