<template>
  <div class="list">
      <h3><span></span>楼市动向 - NEWS<a class="nonea">阅读更多</a></h3>
      <dl v-for="i in 6">
          <a href=""><dt>攔金31億元！中山第四季度土地成...</dt></a>
          <dd>In this chapter in our series ...</dd>
      </dl>
  </div>
</template>
<style>
.list{
    padding: 28px 15px;
    background: #F7F7F7;
}
.list h3{
    overflow: hidden;
}
.list h3 span{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: black;
    float: left;
    margin-right: 15px;
}
.list h3 a{
    display: inline-block;
    width: 64px;
    text-align: center;
    line-height: 20px;
    border: solid 1px;
    float: right;
    font-weight: normal;
}
.list dl{
    margin-top: 35px;
}
.list dl dt{
    color: #5B5B5B;
}
.list dl dd{
    color: #C0A599;
    margin-top: 5spx;
}
</style>

