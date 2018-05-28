/* 设置cookie */
export function setCookie (cName, value, expire) {
  var date = new Date()
  date.setDate(date.getDate() + expire)
  document.cookie = cName + '=' + escape(value) + ((expire == null) ? '' : ';expires=' + date.toGMTString())
}

/* 获取cookie */
export function getCookie (cName) {
  if (document.cookie.length > 0) {
    let cStart = document.cookie.indexOf(cName + '=')
    if (cStart !== -1) {
      cStart = cStart + cName.length + 1
      let cEnd = document.cookie.indexOf(';', cStart)
      if (cEnd === -1) {
        cEnd = document.cookie.length
      }
      return unescape(document.cookie.substring(cStart, cEnd))
    }
  }
  return ''
}