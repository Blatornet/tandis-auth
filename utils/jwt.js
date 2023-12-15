require("dotenv").config();

const jwt = require("jsonwebtoken");

const { JWT_ISSUER,
    JWT_AUDIENCE,
    JWT_EXPIRES_IN,
    JWT_ALGORITHM,
    CERTIFICATE_PRIVATE_KEY,
    CERTIFICATE_PUBLIC_KEY 
} = process.env;

const privateKey = Buffer.from(CERTIFICATE_PRIVATE_KEY, "base64").toString("ascii");
const publicKey = Buffer.from(CERTIFICATE_PUBLIC_KEY, "base64").toString("ascii");

let options = {
    issuer: JWT_ISSUER,
    audience: JWT_AUDIENCE,
    expiresIn: JWT_EXPIRES_IN,
    algorithm: JWT_ALGORITHM
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