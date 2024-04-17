const fs = require('node:fs');
// Exam Complete Date/Tm	Order Procedure	Accession	Dictation Date/TM	Final Date/Tm	Exam Order Time	Exam Order Date	Row Count	
const examData = () => {
    try {
        const data = fs.readFileSync('./test.txt', 'utf8');
        return data
      } catch (err) {
        console.error(err);
      }
};

const toJSON = (examData) => {
    examData = examData.split("\n");
    for (let i = 0; i < examData.length; i++) {
        const row = examData[i];
        const arr = row.split(" \t")
        console.log(arr)
    }
    return examData
}
console.log(toJSON(examData()))