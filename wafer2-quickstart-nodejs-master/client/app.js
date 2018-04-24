//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

var db_init = require('../../server/tools/initdb.js')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
        console.log('success')
    }
})