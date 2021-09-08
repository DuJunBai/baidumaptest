<template>
    <div id="map" class="container">

    </div>
</template>

<script>

export default {
  name: "Map",
  mounted() {
    // 百度地图API功能
    var map = new BMap.Map("map");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.713637,40.111977), 20);  // 初始化地图,设置中心点坐标和地图级别
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

    var geolocation = new BMap.Geolocation();
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：' + r.point.lng + ',' + r.point.lat);
      }
      else {
        alert('failed' + this.getStatus());
      }
    });
  }
}
</script>

<style scoped>
  #map {
    height: 500px;
    width: 500px;
  }
</style>