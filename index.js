const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

// START CONTROLLERS HERE
const plantsControllers = require('./controllers/plants');

app.use('/api/plants', plantsControllers);

const commentsControllers = require('./controllers/comments');

app.use('/api/comments', commentsControllers);

// END CONTROLLERS HERE

// setting the local port, or use the default 8000

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
