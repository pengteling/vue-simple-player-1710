<script>
import axios from 'axios'
import jsonp from 'jsonp'
export default {
  data(){
    return {
      musicList: []
    }
  },
  created(){
    // axios.get('/data/musicList.js')
    // axios.get('http://music.henshui.com/api/musicList.js?!234')
    // axios.get('https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric.fcg?g_tk=5381&uin=0&format=jsonp&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&nobase64=1&musicid=213470055&songtype=0&_=1524575282324&jsonpCallback=jsonp1')
    //   .then(res=>{
    //     console.log(res.data)
    //     this.musicList = res.data
    //   })
    // jsonp("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?tpl=3&page=detail&date=2018-06-15&topid=4&type=top&song_begin=0&song_num=30&g_tk=5381&jsonpCallback=MusicJsonCallbacktoplist&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",{name:"MusicJsonCallbacktoplist"},(err,data)=>{
    //   console.log(data)
    // })

    // axios({
    //    method:'post',
    //    url:'',
    // })
    // axios.all()

    fetch('/data/musicList.js')
      .then(res=>res.text())
      .then(res=>console.log(res))
  }
  // eval()
  // mounted(){

  // }
}
</script>
<template>
  <div>
    {{ musicList }}
  </div>
</template>
