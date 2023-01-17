const app = require('./app.js')
const port = 3030

app.listen(port, () => {
 console.log(`Server is running on http://localhost:${port}/`)
})
