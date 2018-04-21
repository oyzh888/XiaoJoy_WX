module.exports = function (ctx, next) {
  const { mysql } = require('../../qcloud.js')
  var res = mysql('cAppinfo').select('*').where({ session_duration: 2000 }).first()
  ctx.state.data = res
}