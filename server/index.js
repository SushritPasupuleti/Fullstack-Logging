const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
var fs = require('fs')
var morgan = require('morgan')
var path = require('path')

app.use(cors({
    origin: 'http:/localhost:3000'
}));

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })


// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
// app.use(
// 	morgan(':method :url :status :res[content-length] - :response-time ms', {stream: accessLogStream})
// )

const winstonLogger = require('./logger');

app.get('/', (req, res) => {
	try {
		winstonLogger.info('Executed "/" endpoint');
		res.send('Hello There.')
	}
	catch (ex) {
		winstonLogger.error(ex);
	}
})

app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port} 🚀`)
	console.log("Writing Logs to: ", path.join(__dirname, 'access.log'))
})
