<template>
  <div id="app">
    <div ref="app-container" class="app-container">
      <music-btn class="music-btn" />
      <div id="clock-box">
        <p color="#ff5e04" style="font-size: 30px; color: red;">我们在一起<span class="STYLE1" style="margin-left: 5px;">已经是……</span></p>
        <div style="color:#000; font-size: 15px;" id="clock">{{ result }}</div>
      </div>
      <router-view />
    </div>
    <loading />
  </div>
</template>
<script>
import MusicBtn from '@/components/MusicBtn'
import Loading from '@/components/Loading'
import { initCanvas } from '@/utils/canvas'

export default {
  data() {
    return {
      result: null,
      open: true
    }
  },
  components: {
    MusicBtn,
    Loading
  },
  mounted() {
    initCanvas(this.$refs['app-container'])
  },
  created() {
    this.timeFlush()
    setInterval(this.timeFlush, 1000)
  },
  methods:{
    sleep(ms) { //sleep延迟方法2
      var unixtime_ms = new Date().getTime();
      while(new Date().getTime() < unixtime_ms + ms) {}
    },
    async timeFlush() {
      var together = new Date();
      together.setFullYear(2022, 1, 18); 			//时间年月日 月份的角标从0开始
      together.setHours(22);						//小时	
      together.setMinutes(0);					//分钟
      together.setSeconds(0);					//秒前一位
      together.setMilliseconds(0);				//秒第二位
      this.timeElapse(together);
    },
    timeElapse(date){
      var current = Date();
      var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
      var days = Math.floor(seconds / (3600 * 24));
      seconds = seconds % (3600 * 24);
      var hours = Math.floor(seconds / 3600);
      if (hours < 10) {
        hours = "0" + hours;
      }
      seconds = seconds % 3600;
      var minutes = Math.floor(seconds / 60);
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      seconds = seconds % 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      var result = "第" + days + "天 " + hours + "小时" + minutes + "分钟" + seconds + "秒"; 
      this.result = result
    }
  }
}
</script>
<style lang="scss">
html,
body,
#app,
.app-container {
  width: 100%;
  height: 100%;

  .rough-canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}
#clock-box {
  padding-top: 12%;
  display: revert;
  height: 20%;
  text-align: center;
}
</style>
