import React, { useState, useEffect} from "react"
import { createExam } from "../utils/models"

export const CsvReader = () => {
  const [csv, setCsv] = useState()
  const [csvArray, setCsvArray] = useState([])

  const processCSV = (str, delim=',') => {
    const headers = str.slice(0, str.indexOf('\n')).split(delim);
    const rows = str.slice(str.indexOf('\n')+1).split('\n');

    const newArray = rows.map(row => {
      const values = row.split(delim);
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header] = values[i];
        return obj;
      }, {})
      return eachObject;
    })

    setCsvArray(newArray)
  }

  const submit = () => {
    const file = csv
    const reader = new FileReader();

    reader.onload = function(e) {
      let text = e.target.result;
      text = text.replaceAll("\r","")
      processCSV(text)
    }
    reader.readAsText(file)
  }

  useEffect(() => {
    if(csvArray) {
      csvArray.forEach(exam => createExam(exam))
    }
  }, [csvArray])

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if(csv) { submit() }
    }}>
      <input 
        onChange={(e) => setCsv(e.target.files[0])}
        type="file"
        name="File upload" 
        accept=".csv"/>
      <button>Submit</button>
    </form>
  )
}