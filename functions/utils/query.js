/***
 * Sends HTTP requests with axios
 */
require("dotenv").config()
const axios = require("axios")
module.exports = async (query, variables) => {
  const result = await axios({
    url: "https://graphql.us.fauna.com/graphql",
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET}`,
    },
    data: {
      query,
      variables,
    },
  })

  return result.data
}
