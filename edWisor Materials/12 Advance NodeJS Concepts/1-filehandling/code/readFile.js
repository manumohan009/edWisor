/* Import All The Required Modules */
const fs = require('fs')


/* Read File Example :
*  Read File Synchronously
*  Read File Asynchronously
*  Read Directory Synchronously
*  Read Directory Asynchronously
*
*/
/* Read A File Synchronously */
let readFileSynchronously = () => {
    /* Function  : readFileSync(file[, options])
     *
      *Return Type : Buffer (If Encoders are Not Passed)
      * */
    let variableContainsFileData = fs.readFileSync('example.txt')
    console.log('This Is File Buffer')
    console.log(variableContainsFileData)

    let variableContainsEncodedFileData = fs.readFileSync('example.txt','utf8')
    console.log('This Is Encoded File Data')
    console.log(variableContainsEncodedFileData)
}

let readFileAsynchronously = () => {
    /* Example Of Its Asynchronous Behaviour */
    console.log('File Reading Started')
    let variableContainsFileData = fs.readFile('example.txt')
    console.log('File Reading Completed')
    console.log(variableContainsFileData)

    /* Handling The Asynchronous Behaviour */
    // noinspection JSAnnotator
    fs.readFile('example.txt','utf8',(err,fileData)=>{
       if(err) {
           console.log('Some Error Occurred While Reading The File')
           console.log(err)
       } else {
           console.log('File Data Is Read Successfully')
           console.log(fileData)
       }
    })
}
 let readDirectorySynchronously = () => {
     /* Function  : readFileSync(file[, options])
     *
      *Return Type : Array (Of File List)
      * */
    let variableContainsDirectoryData = fs.readdirSync('exampleDir')
     console.log(`This is the file list : ${variableContainsDirectoryData}`)
 }

let readDirectoryAsynchronously = () => {
    /* Function  : readFileSync(file[, options])
    *
     *Return Type : Array (Of File List)
     * */
    fs.readdir('exampleDir',(err,file)=>{
        if(err) {
            console.log(err)
        } else {
            console.log(file)
        }
    })

}
module.exports = {
    readFileSynchronously: readFileSynchronously,
    readFileAsynchronously: readFileAsynchronously,
    readDirectorySynchronously: readDirectorySynchronously,
    readDirectoryAsynchronously: readDirectoryAsynchronously
}