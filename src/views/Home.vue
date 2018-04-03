<template>
  <div class="home">
    <div class="banner">
      <Lunbo></Lunbo>
    </div>
    <div class="main">
        <div class="mainLeft">
          <div class="mainLeftTop">
            <div v-for="i in arr1" class="fd"><img :src="i.name" alt=""></div>
          </div>
          <div class="mainLeftBottom">
            <div class="lpzs" v-for="i in 3">
              <h2>全新商铺</h2>
              <p>-News Shops-</p>
              <div class="lanWrap">
                <Lxr v-for="i in 3"></Lxr>
              </div>
              <a class="btn">浏览更多二手楼盘</a>
            </div>
          </div>
        </div>
        <div class="mainRight">
          <div class="mainRightTop">
            <mainRightTop></mainRightTop>
            <div class="mainRightBootom">
              <h3><span></span>联系我们 - CONTACT</h3>
              <dl v-for="i in 3">
                <dt>Tom </dt>
                <dd>188 0000 0000  /  008-6666 6666</dd>
            </dl>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import lan3 from '../assets/lan.jpg'
import lan4 from '../assets/lan.jpg'
import lan5 from '../assets/lan.jpg'
import lan6 from '../assets/lan.jpg'
import Lxr from '../components/Lan.vue'
import Lunbo from '../components/Lunbo.vue'
import mainRightTop from '../components/mainRightTop.vue'
  export default {
    data(){
      return {
        arr1:[
          {name:lan3},
          {name:lan4},
          {name:lan5},
          {name:lan6}
        ]
      }
    },
    components:{
      Lunbo,
      Lxr,
      mainRightTop
    }
  }
</script>

<style>
.home{
  width: 1275px;
  margin: 0 auto;
}
.banner{
  width: 100%;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.main{
  width: 1110px;
  height: auto;
  background: /*lime*/;
  margin: 30px auto 0;
  overflow: hidden;
  margin-bottom: 100px;
}
.mainLeft{
  width: 820px;
  height: auto;
  float: left;
}
.mainLeftTop{
  overflow: hidden;
}
.mainLeft .fd{
  width: 405px;
  float: left;
  margin-bottom: 10px;
}
.mainLeft .fd:nth-of-type(even){
  margin-left: 10px;
}
.mainLeft .fd img{
  width: 100%;
}
.lpzs{
  width: 100%;
  overflow: hidden;
  padding: 30px 0;
  background: #F7F7F7;
  margin-top: 40px;
}
.lpzs h2{
  text-align: center;
  font-size: 22px;
}
.lpzs>p{
  text-align: center;
  color: #aaaaaa;
  
}
.lpzs .lanWrap{
  overflow: hidden;
  margin-top: 23px;
}
.lpzs .btn{
  border: #3A79E8 solid 1px;
  display: block;
  width: 146px;
  text-align: center;
  line-height: 38px;
  margin: 0 auto;
}
.mainRight{
  width: 270px;
  float: right;
}
.mainLeftBootom{
  width: 270px;
  padding: 28px 15px;
  background: lime;
}
.mainRightBootom{
  padding: 28px 15px;
  background: #F7F7F7;
  margin-top: 10px;
}
.mainRightBootom h3{
    overflow: hidden;
}
.mainRightBootom h3 span{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: black;
    float: left;
    margin-right: 15px;
}
.mainRightBootom dl{
    margin-top: 35px;
}
.mainRightBootom dl dt{
    color: black;
}
.mainRightBootom dl dd{
    color: #0000D5;
    margin-top: 5spx;
}
</style>
