const express = require('express')
const app = express()
const port = process.env.PORT || 5050

// default middleware
app.use(express.json())

// using blog route
const blogRoute = require('./src/routes/blog_routes')

app.use('/blogs', blogRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
