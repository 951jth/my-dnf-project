const { createProxy } = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "http://localhost:8080",
        createProxy({
            target: "https://api.neople.co.kr",
            changeOrigin : true
        })
    )
}