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
    let variableContainFileData = fs.readFileSync('example.txt');
    console.log('This is File Buffer');
    console.log(variableContainFileData);

    let variableContainEncodedFileData = fs.readFileSync('example.txt','utf8');
    console.log('This is Encoded File Data');
    console.log(variableContainEncodedFileData);
}

let readFileAsynchronously = () => {
  /* Example of its Asynchronous Behaviour  */
  //console.log('File Reading started')
  //let variableContainFileData = fs.readFile('example.txt'); // wrong way
  //console.log('File Reading Completed');
  //console.log(variableContainFileData);

  /* Handling The Asynchronous Behaviour */
  // noinspection JSAnnotator
  fs.readFile('example.txt', 'utf8', (err, fileData) => {
    if(err) {
      console.log('Some Error Occurred while reading the file')
      console.log(err);
    } else {
      console.log('File Data is read successfully');
      console.log(fileData);
    }
  })
}

let readDirectorySynchronously = () => {
    /* Function  : readFileSync(file[, options])
     *
      *Return Type : Array (Of File List)
    * */
   let variableContainsDirectoryData = fs.readdirSync('exampleDir');
   console.log(`This is the file list: ${variableContainsDirectoryData}`);
}

let readDirectoryAsynchronously = () => {
    /* Function  : readFileSync(file[, options])
    *
     *Return Type : Array (Of File List)
     * */
    fs.readdir('exampleDir', (err, file) => {
      if(err) {
        console.log(err);
      } else {
        console.log(file);
      }
    })
}

module.exports = {
  readFileSynchronously: readFileSynchronously,
  readFileAsynchronously: readFileAsynchronously,
  readDirectorySynchronously: readDirectorySynchronously,
  readDirectoryAsynchronously: readDirectoryAsynchronously
}
