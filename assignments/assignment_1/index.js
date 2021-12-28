function getNameFromCommandLine() {
    let name = process.argv
    len = name.length
    return(name[len-1])
    // Write you code here, name should be taken as args in process.argv
}

function getNameFromEnv() {
    envName=process.env.name
    return envName
    // Write your code here
}

function getNameFromReadLine() {
    var readLine = require("readline");
    var rl = readLine.createInterface(
        process.stdin,process.stdout);
        rl.question(" ",(age)=>{
            console.log(age);
            rl.close();
        });
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}