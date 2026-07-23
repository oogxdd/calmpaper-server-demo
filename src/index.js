const http = require('node:http')
const { handleRequest } = require('./handler')

const port = Number.parseInt(process.env.PORT || '4000', 10)
const server = http.createServer(handleRequest)

server.listen(port, '0.0.0.0', () => {
  console.log(`Calmpaper demo API listening on http://localhost:${port}`)
})
