/**@jsx jsx */
import { jsx } from 'theme-ui'
//components
import SubjectListItem from './SubjectListItem'
//utils
import { subjects } from '../../utils/subjects'
import remCalc from '../../utils/remCalc'
import { v4 as uuidv4} from 'uuid'

export default function ({ nameInput, handleClick }) {
  const searchString = nameInput.toLowerCase()
  const subjectNames = Object.keys(subjects);
  const filteredSubjectNames = subjectNames.filter( subjectName => {
    return subjectName.toLowerCase().includes(searchString);
  })

  const subjectList = filteredSubjectNames.map( subjectName => {
    return <SubjectListItem 
            key={uuidv4()} 
            subjectName={subjectName}
            handleClick={handleClick}
          />
  })
  return(
    <div className="countdown__subject-list-container" sx={{
      position:'absolute',
      width: "100%",
      height: "100%",
      backgroundColor: 'background',
    }}>
      <ul>
        { subjectList }
      </ul>
    </div>
  )
}