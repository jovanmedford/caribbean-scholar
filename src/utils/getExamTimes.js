/**
   * Gets the times for each paper required for an exam
   * @param {String} name Name of the subject
   * @param {String} level Subject Level
   * @returns {String[]} examTimes Array of  
   */
import { subjects } from "./subjects"
 export default function(name,level) {
  const emptySubject = {
    "csec": [null,null,null,null],
    "cape": [null,null,null,null]
  }
  const subject = (name in subjects) ? subjects[name] : emptySubject;
  return subject[level];
}