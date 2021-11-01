const query = require("./utils/query")

const DELETE_EXAM = `
    mutation($id: ID!){
        deleteExam(id: $id){
          _id
        }
    }
`

exports.handler = async event => {
  const { id } = JSON.parse(event.body)
  const { data, errors } = await query(DELETE_EXAM, {
    id,
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ deletedMessage: data.deleteMessage }),
  }
}
