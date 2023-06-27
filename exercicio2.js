const students = [
    {
      name: "Samuel",
      test1: 8,
      test2: 9.5,
      
    },
    {
      name: "Lien",
      test1: 10,
      test2: 5,
      
    },
    {
      name: "Rudy",
      test1: 7,
      test2: 3.5,
  
    }
]

function media(test1, test2) {
    return ((test1 + test2)/2).toFixed(2)
}


for (let student of students) {
    let individualResults = media(student.test1, student.test2)
    let final = media < 7 ? 'Failed!' : 'Approved'
    console.log(`he student ${student.name} got a final grade ${individualResults}. ${final} `)

}



