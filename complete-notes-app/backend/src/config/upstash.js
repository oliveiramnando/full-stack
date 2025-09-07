require('dotenv').config()
const { Ratelimit } = require('@upstash/ratelimit');
const { Redis } = require('@upstash/redis');

// create a ratelimiter that allows 100 request per 60 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s")
})

module.exports = ratelimit;