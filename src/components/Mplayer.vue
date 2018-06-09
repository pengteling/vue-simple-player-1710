<template>
  <audio 
    :src="url"
    ref="audio"
    
  />
  
</template>
<script>
export default {
  data(){
    return{

    }
  },
  props:{
    url:{
      type:String,
      required: true
    },
    paused:{
      type:Boolean,
      required: true
    },
    volume:{      
      default:80
    }
  },
  watch:{
    'paused'(){
      this.playPause()
    },
    'volume'(val){
      this.changeVolume(val)
    }
  },
  computed:{
    audio(){
      return this.$refs.audio
    }
  },
  methods:{
    playPause(){
      if(this.audio.paused){
        this.audio.play()
      }else{
        this.audio.pause()
      }
    },
    changeVolume(volume){
      this.audio.volume = (volume / 100)*(volume / 100)
    }
  }
}
</script>
