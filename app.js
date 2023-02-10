import express from 'express'
import router from'./routes/index.js'
import { PORT } from './config/config.js'
const app = express()
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});