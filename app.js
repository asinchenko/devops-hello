const express = require('express')
const app = express()
let counter = 0

app.get('/', (req, res) => {
	counter++
	res.send(`
        <html>
            <head>
                <title>DevOps Course</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 80px;
                    }
                    h1 {
                        color: #4cc154;
                    }
                    p {
                        font-size: 1.2em;
                        color: #3c83ca;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to DevOps course!</h1>
                <h1>This course contains a lot of interesting materials</h2>
                <p>This page has been visited ${counter} times.</p>
            </body>
        </html>
    `)
})

const port = process.env.PORT || 8080
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
