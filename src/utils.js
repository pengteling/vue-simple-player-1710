export const formatTime =(time) => {
  //  03:05
  let mm = parseInt(time / 60)
  let ss = parseInt(time - mm * 60)
  mm = mm < 10 ? `0${mm}`: mm
  ss = ss < 10 ? `0${ss}`: ss
  let newTime = `${mm}:${ss}`
  return newTime
}