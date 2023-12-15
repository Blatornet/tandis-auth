const jwt = require("../../utils/jwt");

const auth = (req, res) => {
    const accessToken = jwt.sign({ sub: "bb@blatornet.se" });

    return res.json({
      accessToken,
    })
  }

  export default auth;