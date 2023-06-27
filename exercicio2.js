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

function result(student) {
    return `
    The student ${student.name} got a final grade ${media(student.test1, student.test2)}.`
    switch(media) {
        case 1:
            if(media >= 7) {
                console.log("Approved!") 
            }
          break
        default:
            console.log("Failed!")
      } 
}

for (let student of students) {
    let results = result(student)
    console.log(results)
  }
