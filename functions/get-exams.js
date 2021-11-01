const query = require("./utils/query")

const GET_EXAMS = `
  query {
    allExams {
      data {
          _id
          level
          paperNumber
          date
          period
      }
    }
  }
 `

exports.handler = async () => {
  const { data, errors } = await query(GET_EXAMS)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ exams: data.allExams.data }),
  }
}
