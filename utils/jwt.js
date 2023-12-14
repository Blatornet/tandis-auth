const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKey  = fs.readFileSync("./cert/private.key", "utf8");
const publicKey  = fs.readFileSync("./cert/public.key", "utf8");

let options = {
    issuer:  "Tandis",
    audience:  "https://tandis.app",
    expiresIn:  "12h",
    algorithm:  "RS256"
};

const sign = (payload) => {
    const token = jwt.sign(payload, privateKey, options);

    return token;
}

const decode = (token) => {
    return jwt.decode(token, {complete: true});
}

const verify = (token, verifyOptions) => {
    try{
        options.subject = verifyOptions.subject;

        return jwt.verify(token, publicKey, options);
    } catch (err) {
        return false;
    }
}

module.exports = {
    sign,
    decode,
    verify
}