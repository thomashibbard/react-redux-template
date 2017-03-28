const express = require('express')
		, app = express()
		, path = require('path')
		, serveindex = require('serve-index')
		, pug = require('pug');;

const PORT = 5501;

app.use(express.static(__dirname));
// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'dist', 'views'))
// app.locals.pretty = true;

app.use('/dist', serveindex(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
	res.render('index', {});
});

app.listen(PORT, () => {
	console.log('listening on', PORT);
});
