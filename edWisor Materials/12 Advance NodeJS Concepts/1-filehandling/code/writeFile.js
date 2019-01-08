/* Import All The Required Modules */
const fs = require('fs')


/* Writing File Example :
*  Writing File Synchronously
*  Writing File Asynchronously
*  Writing Directory Synchronously
*  Writing Directory Asynchronously
*
*/

/* Writing File Asynchronously */
let writeFileAsynchronously = () => {
    /* Function  : fs.writeFile(file, data[, options], callback)
     * Arguments: 1. File Name - The Name of The File You Want
     *            2. Data (String | Buffer) - Type Of Data Can Be Either String Or Buffer
     *            3. Options - This Argument is optional. In this option, various value is defined, like the encoding of file and ect.
     *            4. Callback - When the file writing operation is completed or failed, this function is called.
      * */
    let fileData = `This function Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.
                    The encoding option is ignored if data is a buffer. It defaults to 'utf8'.`
    fs.writeFile('writeFile.txt',fileData,(err)=>{
        if(err) {
            console.log(err)
        } else {
            console.log(`The Data Is Written To File`)
        }
    })
}

let writeFileSynchronously = () => {
    /* Function  : fs.writeFileSync(file, data[, options])
     * Arguments: 1. File Name -  The Name of The File You Want
     *            2. Data (String | Buffer) - Type Of Data Can Be Either String Or Buffer
     *            3. Options - his Argument is optional. In this option, various value is defined, like the encoding of file and ect.
     * Returns undefined
      * */
    let fileData = `This function Asynchronously writes data to a file, replacing the file if it already exists. data can be a string or a buffer.
                    The encoding option is ignored if data is a buffer. It defaults to 'utf8'.`
    console.log('File Writing Started')
    fs.writeFileSync('writeFile.txt',fileData)
    console.log('File Writing Ended')
}

module.exports = {
    writeFileAsynchronously: writeFileAsynchronously,
    writeFileSynchronously: writeFileSynchronously
}