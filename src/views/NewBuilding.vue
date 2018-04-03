<template>
  <div id="NewBuilding">
    <div class="newHead">
      <div class="newHeadCet">
        <p>首页 > 全新楼盘</p>
      </div>
    </div>
    <div class="newMain">
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Main from '../components/Main.vue'
  export default {
    components:{
      Main
    }
  }
</script>

<style>
#NewBuilding{
  width: 100%;
}
.newHead{
  background: #F4F4F4;
}
.newHeadCet{
  width: 1190px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.newMain{
  width: 1190px;
  margin: 0 auto;
  background: /*lime*/;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>

