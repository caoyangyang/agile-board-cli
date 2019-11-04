const exec = require('child_process').exec
const printError = require('./print-error')

module.exports = function (cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, function (err, stdout, stderr) {
      if (err) {
        printError(stderr || err.message)
        return reject(err)
      } else if (stderr) {
        printError(stderr, { level: 'warn', color: 'yellow' })
      }
      return resolve(stdout)
    })
  })
}
