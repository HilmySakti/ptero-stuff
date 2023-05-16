const { spawn } = require('child_process')
const cp = require('child_process')
// const chalk = require('chalk')
const { promisify } = require('util')
const exec = promisify(cp.exec).bind(cp)


function start(cmd) {
	return spawn(cmd, [], {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
}

const welcome = `Panel Sudah otomatis terinstall:
FFMPEG, IMAGEMAGICK, PUPPETEER, PYTHON3, YARN, SPEEDTEST-NET DLL`

start('clear')

//start('screenfetch')

console.log(welcome)

start('bash')

console.log('Bash Ready!')
