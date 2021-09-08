<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
/*去除百度地图图标及部分版权文字*/
.anchorBL a{
  display: none;
}
.anchorBL img{
  display: none;
}
.anchorBL span{
  display: none!important;
}
</style>
