<template>
  <div>
    <!-- <audio src="http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3" controls ></audio> -->
    <Mplayer
      :url="url"
      ref="mplayer"
      :paused="paused"
      :volume="volume"
      
    />

    <button @click="playPause">
      {{ this.paused ? "播放" : "暂停" }}
    </button>
    <input type="range" v-model="volume" >

    
  </div>
</template>
<script>
import Mplayer from '@/components/Mplayer'
export default {
  data(){
    return{
      paused:true,
      volume:80,
      url:'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
    }
  },
  components:{
    Mplayer
  },
  methods:{
    playPause(){
      this.paused = !this.paused
      // this.$refs.playPause.textContent=""
      // this.$refs.mplayer.$refs.audio.play()
    }
  }
}
</script>
