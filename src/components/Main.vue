<template>
  <div id="main"> 
      <div class="mainLeft">
          <h3><span></span>全新商铺/ NEW SHOPS</a></h3>
          <div class="lanWrap">
              <Lxq v-for="i in 9" class="lanMrg"></Lxq>
          </div>
      </div>
      <div class="mainRightf">
          <input type="text" class="search" placeholder="輸入樓磐明稱...">
          <MainRtTop></MainRtTop>
      </div>
  </div>
</template>

<script>
import Lxq from './Lan.vue'
import MainRtTop from './mainRightTop.vue'
export default {
    components:{
        Lxq,
        MainRtTop
    }
}    
</script>

<style>
#main{
    width: 1190px;
    height: auto;
    overflow: hidden;
}
.mainLeft{
    width: 822px;
    height: auto;
    background: /*pink*/;
    float: left;
}
.mainLeft h3{
    overflow: hidden;
}
.mainLeft h3 span{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: black;
    float: left;
    margin-right: 15px;
}
.mainLeft .lanWrap{
    margin-top: 45px;
}
.mainRightf{
    width: 298px;
    background: #F7F7F7;
    float: right;
}
.mainRightf .search{
    width: 224px;
    height: 36px;
    border: solid 2px #cccccc;
    margin-top: 30px;
    outline: none;
    margin-left: 16px;
    text-indent: 16px;
}
.mainRightf .list .nonea{
    display: none;
}
</style>
