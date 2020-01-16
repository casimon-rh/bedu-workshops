const express = require('express')

const app = express()

const port = 3000

const courses = require('./routes/courses')

app.get('/', (req, res) => res.send('deberian llamarte bob elegante 🎩   '))
app.use('/courses', courses) //! intedesante

app.listen(port, () => console.log('el meñique! 🤙   '))

//? pm2 vs nodemon