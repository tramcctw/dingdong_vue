export function getTime() {
  let time = ""
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let seconds = date.getSeconds()
  if(seconds < 10) seconds = '0' + seconds
  if(minutes < 10) minutes = '0' + minutes
  if(hour < 10) hour = '0' + hour
  if(day < 10) day = '0' + day
  if(month < 10) month = '0' + month

  time = year + '-' + month + '-' + day + " " + hour + ":" + minutes + ":" + seconds
  return time
}