// add solution here
function theBeatlesPlay(musicians,instruments){
  let assigned = []
  for (let i = 0; i< musicians.length; i++){
    let string = musicians[i] + " plays " + instruments[i]
    assigned.push(string)
  }
  return assigned
}
