const query = require("./utils/query")

const CREATE_EXAM = `
  mutation($name: String!, $level: String!, $paperNumber: String!, $date: String!, $period: String! ) {
    createExam(data: {name: $name, level: $level, paperNumber: $paperNumber, date: $date, period: $period }) {
      _id
      name
      level
      paperNumber
      date
      period
    }
  }
`

exports.handler = async event => {
  const { name, level, paperNumber, date, period } = JSON.parse(event.body)
  const { data, errors } = await query(CREATE_EXAM, {
    name,
    level,
    paperNumber,
    date,
    period,
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ exam: data.createExam }),
  }
}
