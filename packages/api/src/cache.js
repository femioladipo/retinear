const mcache = require('memory-cache')

const cache = new mcache.Cache()

const cachingMiddleware = duration => {
  return (req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url
    const data = JSON.parse(cache.get(key))
    if (data) {
      return res.send(data)
    } else {
      res.sendResponse = res.send
      res.send = body => {
        cache.put(key, JSON.stringify(body), duration * 1000)
        res.sendResponse(body)
      }
      return next()
    }
  }
}

exports = module.exports = cachingMiddleware
