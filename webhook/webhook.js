const http = require('http')
const createHandler = require('github-webhook-handler')
const handler = createHandler({
  path: '/',
  secret: 'myhashsecret'
})

function run_cmd (cmd, args, callback) {
  const {spawn} = require('child_process')
  const child = spawn(cmd, args)
  let resp = ''
  child.stdout.on('data', function (buffer) {
    resp += buffer.toString()
  })
  child.stdout.on('end', function () {
    callback(resp)
  })
}

http.createServer((req, res) => {
  handler(req, res, err => {
    res.statusCode = 404
    res.end('no such location...')
  })
}).listen(9876, () => {
  console.log('Webhook listen at 9876')
})
handler.on('error', (err) => {
  console.log('_*_Error_*_', err.message)
})
handler.on('*', event => {
  console.log('Receive *')
  run_cmd('sh', ['./deploy-dev.sh'], function (text) {
    console.log(text)
  })
})