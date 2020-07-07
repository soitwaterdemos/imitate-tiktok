const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const koaStatic = require('koa-static');
let app = new Koa();

// 静态资源
// 本地文件放在 ./static    但是访问时直接 localhost:8080/video.json 即可 
app.use(koaStatic(path.join(__dirname, '/static')))

app.use(async ctx => {
  if (ctx.url === '/static/video.json') {
    ctx.body = JSON.stringify({});
  } else if (0) {

  }
})

app.listen(8080, () => {
  console.log('set window：', 8080)
})

