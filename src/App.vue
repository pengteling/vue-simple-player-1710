<template>
  <div>
    <!-- <audio src="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3" controls ></audio> -->
    <Mplayer
      :url="url"
      ref="mplayer"
      :paused="paused"
      :volume="volume"
      :curTime="currentTime"
      :changeTime="changeTime"
      @getDuration="getDuration"
      @getCurrentTime="getCurrentTime"      
    />

    <button @click="playPause">
      {{ this.paused ? "播放" : "暂停" }}
    </button>
    <input type="range" v-model="volume" >
    {{ timeView }}
    <button @click="changeTime=60">改变进度</button>
    
  </div>
</template>
<script>
import Mplayer from '@/components/Mplayer'
import { formatTime } from '@/utils.js'
export default {
  data(){
    return{
      paused:true,
      volume:80,
      url:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3',
      duration:0,
      currentTime:0,
      changeTime:0 
    }
  },
  components:{
    Mplayer
  },
  computed:{
    timeView(){
      return formatTime(this.currentTime) +' / ' +formatTime(this.duration)
    }
  },
  methods:{
    playPause(){
      this.paused = !this.paused
      // this.$refs.playPause.textContent=""
      // this.$refs.mplayer.$refs.audio.play()
    },
    getDuration(duration){
      this.duration = duration
    }    ,
    getCurrentTime(currentTime) {
      this.currentTime = currentTime
    }
  }
}
</script>
