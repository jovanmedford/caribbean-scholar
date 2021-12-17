import faunadb, { query as q } from "faunadb"
const client = new faunadb.Client({
  secret: `${process.env.GATSBY_FAUNA_SECRET}`,
  domain: "db.us.fauna.com",
})

export const getSubjects = async () => {
  let allSubjects = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("subjects"))),
      q.Lambda(x => q.Get(x))
    )
  )
  return allSubjects.data
}

export const getExams = async () => {
  let allExams = await client.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection("exams"))),
      q.Lambda(x => q.Get(x))
    )
  )
  console.log(allExams)
  return allExams.data
}

export const createExam = async ({ name, level, paperNumber, date }) => {
  let data = await client.query(
    q.Create(q.Collection("exams"), {
      data: {
        name,
        level,
        paperNumber,
        date,
      },
    })
  )
  data.data.id = data.ref.value.id
}
