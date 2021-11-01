const query = require("./utils/query")

const UPDATE_EXAM = `
    mutation($id: ID!, $name: String!, $level: String!, $paperNumber: String!, $date: String!, $period: String!){
        updateExam(id: $id, data: {name: $name, level: $level, paperNumber: $paperNumber, date: $date, period: $period }){
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
  const { id, name, level, paperNumber, date, period } = JSON.parse(event.body)
  const { data, errors } = await query(UPDATE_EXAM, {
    id,
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
    body: JSON.stringify({ updatedExam: data.updateExam }),
  }
}
