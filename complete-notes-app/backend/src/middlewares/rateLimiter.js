const ratelimit = require("../config/upstash.js");


const rateLimiter = async (req,res,next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key"); // normally we put the identifier like user id if we did authentication
        // const { success } = await ratelimit.limit(userId); // like this 
        if (!success) {
            return res.status(429).json({ message: "Too many requests. please try again later" });
        }
        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
}

module.exports = rateLimiter;