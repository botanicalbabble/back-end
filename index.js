const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.use(cors())


// START CONTROLLERS HERE 





// END CONTROLLERS HERE 



// setting the local port, or use the default 8000 

app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
