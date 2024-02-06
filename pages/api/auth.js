const jwt = require("../../utils/jwt");
const axios = require("axios");
const https = require("https");
const qs = require("qs");

const { RSSO_AUTH_AUDIENCE, RSSO_URL, RSSO_AUTH_CLIENT_TOKEN } = process.env;

const auth = async (req, res) => {
  const userId = "bb@blatornet.se";

  const accessToken = jwt.sign({ sub: userId });

  // Create Agent to fix SSL error due to internal certificate
  const httpsAgent = new https.Agent({ rejectUnauthorized: false });

  // Create Payload
  const data = qs.stringify({
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: accessToken.toString(),
    audience: RSSO_AUTH_AUDIENCE,
  });

  // Create Axios conf
  const httpCall = {
    method: "post",
    url: RSSO_URL + "/rsso/oauth2/token",
    headers: {
      Authorization: "Basic " + RSSO_AUTH_CLIENT_TOKEN,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    httpsAgent: httpsAgent,
    data: data.toString(),
  };

  try {
    // Get Authentication Response
    const response = await axios(httpCall);

    //console.log(data);
    //console.log("###");
    //console.log(httpCall);
  } catch (error) {
    // Log Error
    console.log(error);
  }

  return res.json({
    accessToken,
  });
}

  export default auth;