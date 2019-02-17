<template>
  <div id="app">
    <v-header :seller= "seller"></v-header>
    <div class="tab">

          <router-link class="item-tab" to="/goods">商品</router-link>

          <router-link class="item-tab" to="/ratings">评论</router-link>

          <router-link class="item-tab" to="/seller">商家</router-link>

    </div>
    <router-view :seller="seller"/>
  </div>
</template>

<script>
import header from './components/header/Vheader'

const ERR_OK=0;

export default {
  data(){
    return{
      seller:{}
    }
  },
  created() { //生命周期   获取数据
    this.$http.get('/api/seller').then((response)=>{
      response=response.body;
      if(response.errno === ERR_OK){
        this.seller=response.data;
      }
    });
    
  },
  components:{
    'v-header':header
  }
}
</script>

<style scoped lang="stylus" >
// @import "./common/stylus/mixin.styl"
  // 引入需要打包的外部样式
@import "./common/stylus/index.styl"
.tab
  display:flex
  width :100%
  height :40px
  line-height 40px
  border-1px(rgba(7,17,27,0.1))
  .item-tab
    flex:1
    text-align:center
    color black
    display block
    font-size 14px
    color:rgb(77,85,93)
    &.active
      color rgb(240,20,20) 
</style>
