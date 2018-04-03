<template>
    <div class="lunbo">
        <ul>
            <li v-for="i in arr"><img :src="i.name" alt=""></li>
        </ul>
        <button class="lt">&lt;</button>
        <button class="gt">&gt;</button>
    </div>
</template>
<script>
import lan from '../assets/banner.jpg'
import lan1 from '../assets/banner.jpg'
import lan2 from '../assets/banner.jpg'
  export default {
    data(){
      return {
        arr:[
          {name:lan},
          {name:lan1},
          {name:lan2}
        ]
      }
    }
  }
</script>
<style>
.banner ul{
  width: 3825px;
  height: 600px;
  overflow: hidden;
}
.lunbo ul li{
  width: 1275px;
  height: 600px;
  list-style: none;
  float: left;
}
.banner ul li img{
  width: 100%;
  height: 600px;
}
.banner button{
  position: absolute;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  top: 300px;
  background: rgba(0, 0, 0, .3);
  border-radius: 50%;
  outline: none;
  border: none;
  color: rgba(255, 255, 255, .3);
  font-size: 20px;
  font-weight: 700;
  opacity: 0;
  transition: 1s;
}
.banner:hover button{
  opacity: 1;
}
.banner button.gt{
  right: 0;
}
</style>
