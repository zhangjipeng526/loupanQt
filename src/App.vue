<template>
  <div id="app">
    <div id="head">
      <div id="logo">
        <img src="./assets/logo.png" alt="" srcset="">
      </div>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/NewBuilding">全新楼盘</router-link>
        <router-link to="/Eslp">二手楼盘</router-link>
        <router-link to="/Qxsp">全新商铺</router-link>
        <router-link to="/Lsdt">楼市动态</router-link>
        <router-link to="/Lxwm">联系我们</router-link>
      </div>
      <div id="zxdh">
        <p>008-6666 6666 <a href="">咨询电话</a></p>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div id="footer">
      <p>地产REALSTATE  &copy; 2020 All Rights Reserved.<span>^</span></p>
    </div>
  </div>
</template>

<style>
*{
  margin:0;
  padding:0;
  color:black;
  text-decoration: none;
  font-size: 14px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#head{
  overflow: hidden;
  width: 1190px;
  height: 99px;
  margin: 0 auto;
  background: /*lime*/;
}
#logo{
  width: 151px;
  float: left;
  margin-top: 27px;
  margin-right: 140px;
}
#nav {
  float: left;
  margin-top: 46px;
}
#nav a {
  margin: 0 20px;
  display: inline-block;
  height: 35px;
}

#nav a.router-link-exact-active{
  border-bottom: solid 1px;
}
#zxdh{
  float: right;
  margin-top: 37px;
}
#zxdh p{
  color: #8D9095;
}
#zxdh p a{
  display: inline-block;
  width: 86px;
  text-align: center;
  padding: 5px 0;
  background: #3A79E8;
  border-radius: 5px;
  color: white;
  margin-left: 5px;
  transition: 1s;
}
#zxdh p a:hover{
  background: #366DDB;
}
#footer{
  line-height: 112px;
  background: #262626;
}
#footer p{
  text-align: center;
  color: #666666;
}
#footer p span{
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  float: right;
  font-size: 20px;
  color: white;
  margin: 50px 30px 0;
}
#footer p span:hover{
  cursor: pointer;
}
</style>
