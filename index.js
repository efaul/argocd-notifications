const express = require('express')
const app = express()

app.use(express.json())

app.all('/', (req, res) => {
    console.log(`${req.method} / endpoint was hit`)
    res.send('Hello world')
})

// Receiver endpoint for deployment events
app.post('/deploy-webhook', (req, res) => {
    const { app: appName, environment, commit, timestamp, status } = req.body
    // Example: log the deployment event
    console.log(
        `Deployment received: app=${appName}, env=${environment}, commit=${commit}, time=${timestamp}`
    )
    // (Further processing below, e.g., update metrics)
    res.sendStatus(200)
})

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})
