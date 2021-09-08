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
    // 获取自动定位获取的坐标信息
    geolocation.getCurrentPosition(
        function (r) {
          let time = new Date().getTime();
          console.log(time);
          $.ajax({
            type: "GET",
            url: "https://map.baidu.com/?qt=ipLocation&t=" + time,
            dataType: "jsonp",
            success: function (result) {
              let localtion = result.rgc.result.location;
              var x = localtion.lng;
              var y = localtion.lat;
              var gpoint = new BMap.Point(x, y);
              var mk = new BMap.Marker(gpoint);
              map.addOverlay(mk);
              map.panTo(gpoint);
              alert("您的位置:" + gpoint.lng + "," + gpoint.lat)
            },
          });
        },
        { enableHighAccuracy: true }
    );

/*    navigator.geolocation.getCurrentPosition(function(position) {
      var y = position.coords.latitude;
      var x = position.coords.longitude;
      var gpoint = new BMap.Point(x, y);
      setTimeout(function () {
        var mk = new BMap.Marker(gpoint);
        map.addOverlay(mk);
        map.panTo(gpoint);
        alert("您的位置:" + gpoint.lat + "," + gpoint.lng)
      }, 1000)
    })*/
  }
}
</script>

<style scoped>
  #map {
    height: 500px;
    width: 500px;
  }
</style>