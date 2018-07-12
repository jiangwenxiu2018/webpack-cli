<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <!-- <router-link to="/index">哈哈<router-link> -->
    
    <banner />
    <router-view /> // 默认路由是在实例的根组件router-view里切换
    <Button type="success">按钮</Button>
    <Button type="info">按钮</Button>
    <Button type="warning">按钮</Button>
    <div class="chbg" :style="{background:'rgba(0,0,0,'+(s1/100)+')'}">
      <h2>我的背景颜色可以改变哦</h2>
    </div>
    <div class="chbg1" :style="{background:color1}">
      <h2>请选择我的背景颜色</h2>
    </div>
    <Slider v-model="s1"></Slider> 
    <ColorPicker v-model="color1" />
  </div>
</template>

<script>
import Button from './components/Button';
import Banner from './pages/banner';


export default {
  data() {
    return {
      s1:[1,100],
     color1:'',
    }
  },
  name: 'App',
  components:{
    Button,
    Banner,
    // Slider,
    // ColorPicker

  }
}
</script>

<style lang='less'>
.chbg,.chbg1{
  height: 100px;
  width: 100px;
  border: 1px solid red
}


</style>
